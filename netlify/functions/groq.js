const { buildPrompt } = require('./prompt');

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const GROQ_KEY = process.env.GROQ_KEY;
  if (!GROQ_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Chave não configurada no servidor.' }) };
  }

  try {
    const body = JSON.parse(event.body);
    const { tipo, materia, nivel, tema, focoBasico, material } = body;

    if (!tipo || !materia || !nivel) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Parâmetros incompletos.' }) };
    }

    const { prompt, temaUsado } = buildPrompt(tipo, materia, nivel, tema || '', focoBasico || '', material || '');

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + GROQ_KEY
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 2000,
        stream: false,
        messages: [
          {
            role: 'system',
            content: 'Você é professor especialista em elaboração de questões médicas. Responda sempre em português brasileiro com rigor clínico. Nunca escreva colchetes ou texto entre colchetes — escreva o conteúdo real diretamente.'
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: data.error?.message || 'Erro na API Groq' }) };
    }

    const conteudo = data.choices?.[0]?.message?.content || '';
    if (!conteudo) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Resposta vazia. Tente novamente.' }) };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questao: conteudo, temaUsado })
    };

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
