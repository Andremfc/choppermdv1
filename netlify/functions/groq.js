const TEMAS = {
  'Pneumologia': [
    'Pneumonia adquirida na comunidade — critérios diagnósticos e antibioticoterapia empírica',
    'DPOC exacerbado — fisiopatologia e manejo farmacológico',
    'Asma moderada/grave — classificação GINA e escada terapêutica',
    'Insuficiência respiratória hipoxêmica — causas e abordagem inicial',
    'Tromboembolismo pulmonar — apresentação clínica e estratificação de risco',
    'Derrame pleural — diagnóstico diferencial entre transudato e exsudato',
    'Pneumotórax espontâneo — fisiopatologia e conduta',
  ],
  'Neurologia': [
    'AVC isquêmico — fisiopatologia, território vascular e conduta aguda',
    'Epilepsia — classificação das crises e anticonvulsivantes de primeira linha',
    'Doença de Parkinson — tríade clínica e farmacoterapia',
    'Demência de Alzheimer — critérios diagnósticos e tratamento',
    'Meningite bacteriana — agentes etiológicos e antibioticoterapia empírica',
    'Cefaleia — diagnóstico diferencial entre enxaqueca e cefaleia tensional',
    'Esclerose múltipla — apresentação clínica e critérios de McDonald',
  ],
  'Psiquiatria': [
    'Depressão Maior — critérios DSM-5 e antidepressivos de primeira linha',
    'Transtorno de Ansiedade Generalizada — diagnóstico e tratamento',
    'Episódio psicótico inicial — diagnóstico diferencial e abordagem',
    'Transtorno Bipolar — fases e estabilizadores de humor',
    'Esquizofrenia — hipótese dopaminérgica e antipsicóticos',
    'Insônia — fisiologia do sono e hipnóticos',
    'Transtorno de Pânico — fisiopatologia e tratamento farmacológico',
  ],
  'Ortopedia/Reumatologia': [
    'Osteoartrose de joelho — fisiopatologia e tratamento escalonado',
    'Artrite Reumatoide — critérios diagnósticos ACR/EULAR e DMARDs',
    'Gota — metabolismo das purinas, fisiopatologia e tratamento da crise',
    'Lúpus Eritematoso Sistêmico — critérios diagnósticos e órgãos-alvo',
    'Osteoporose — fatores de risco, prevenção e bifosfonatos',
    'Fibromialgia — critérios diagnósticos e abordagem multidisciplinar',
  ],
  'Urgência e Emergência': [
    'Parada cardiorrespiratória — algoritmos ACLS para FV/TVSP e AESP/assistolia',
    'Choque séptico — critérios SOFA, bundle de 1 hora e vasopressores',
    'Politrauma — abordagem primária ATLS e controle de hemorragia',
    'Intubação em sequência rápida — indicações, drogas e técnica',
    'Infarto agudo do miocárdio com supra de ST — reperfusão e antiplaquetários',
    'Cetoacidose diabética — diagnóstico, hidratação e insulinoterapia',
    'Pneumotórax hipertensivo — diagnóstico clínico e descompressão imediata',
  ],
  'Tutoria': [
    'Raciocínio clínico — construção de hipóteses diagnósticas a partir do caso',
    'Correlação entre fisiopatologia e manifestações clínicas',
    'Diagnóstico diferencial baseado em caso clínico estruturado',
    'Integração entre componentes curriculares no manejo do paciente',
    'Medicina baseada em evidências — interpretação de estudos clínicos',
  ],
};

const INSTRUCOES_FORMATO = {
  QOME: `Escreva a questão assim:
1. O caso clínico em parágrafos corridos (sem título ou rótulo)
2. A pergunta com o comando claro
3. As alternativas, cada uma em sua linha com linha em branco entre elas:
   A) texto
   
   B) texto
   
   C) texto
   
   D) texto
4. GABARITO: [letra] — [explicação de cada alternativa com base clínica]`,

  QOOI: `Escreva a questão assim:
1. O caso clínico em parágrafos corridos
2. Os 4 itens numerados: I- / II- / III- / IV-
3. Marque a alternativa que contém a ordem/sequência correta.
4. Alternativas em linhas separadas: A) B) C) D) cada uma com uma sequência
5. GABARITO: [letra] — [justificativa da ordem]`,

  QOAS: `Escreva a questão assim:
1. O caso clínico em parágrafos corridos
2. Analise as sentenças a seguir.
3. Quatro sentenças: I- / II- / III- / IV-
4. É correto o que se afirma em:
5. Alternativas em linhas separadas: A) B) C) D) cada uma com combinação dos romanos
6. GABARITO: [letra] — [análise de cada sentença]`,

  QOVF: `Escreva a questão assim:
1. O caso clínico em parágrafos corridos
2. Classifique V para as sentenças verdadeiras e F para as falsas:
3. Quatro sentenças com parênteses, cada uma em sua linha: ( ) sentença.
4. Assinale a alternativa que contém a sequência correta.
5. Alternativas em linhas separadas:
   A) V-V-F-F
   B) V-F-V-F
   C) F-V-V-F
   D) F-F-V-V
6. GABARITO: [letra] — [classificação justificada de cada sentença]`,

  QOAR: `Escreva a questão assim:
1. O caso clínico em parágrafos corridos
2. I- [proposição]
3. PORQUE
4. II- [razão]
5. A respeito dessas asserções, assinale a opção correta.
6. Alternativas EXATAMENTE assim em linhas separadas:
   A) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.
   B) As asserções I e II são proposições verdadeiras, mas a II não é justificativa correta da I.
   C) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.
   D) A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.
7. GABARITO: [letra] — [análise das asserções]`,
};

const REGRAS = `REGRAS OBRIGATÓRIAS — PORTARIA 413/2025:
1. Enunciado MAIOR que o conjunto de alternativas
2. Caso clínico OBRIGATÓRIO: queixa principal, história, exame físico, exames complementares
3. Alternativas TOTALMENTE corretas ou TOTALMENTE incorretas — nunca mistas
4. Distratores verossímeis, técnicos e com tamanho homogêneo
5. PROIBIDO: EXCETO, todas verdadeiras, todas falsas
6. PROIBIDO nas alternativas: frequentemente, normalmente, exclusivamente, apenas, sempre, nunca
7. Ordem direta: sujeito + verbo + complemento
8. Se inicia com verbo, TODAS iniciam com verbo`;

function buildPrompt(tipo, materia, nivel, temaUsuario, foco, material) {
  const temasDisponiveis = TEMAS[materia] || TEMAS['Tutoria'];
  const temaBase = temaUsuario && temaUsuario.trim()
    ? temaUsuario.trim()
    : temasDisponiveis[Math.floor(Math.random() * temasDisponiveis.length)];

  const temaFinal = foco && foco.trim()
    ? temaBase + ' — com foco em ' + foco.trim()
    : temaBase;

  const instrucoes = INSTRUCOES_FORMATO[tipo] || INSTRUCOES_FORMATO['QOME'];
  const materialExtra = material && material.trim()
    ? '\n\nMATERIAL DE APOIO (use como referência prioritária):\n' + material.trim()
    : '';

  const prompt = `Você é professor experiente de Medicina, especialista em elaboração de questões seguindo a PORTARIA 413/2025 (ENAMED).

Gere UMA questão para estudantes do 6º período de Medicina (Afya UniDomPedro, Salvador-BA).
Matéria: ${materia}
Tema: ${temaFinal}
Tipo: ${tipo}
Dificuldade: ${nivel}
${materialExtra}

${REGRAS}

FORMATO — siga exatamente:
${instrucoes}

IMPORTANTE: NÃO escreva rótulos como [CASO CLÍNICO], [PERGUNTA] ou [ALTERNATIVAS]. Escreva o conteúdo diretamente.`;

  return { prompt, temaUsado: temaFinal };
}

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
    const { tipo, materia, nivel, tema, foco, material } = body;

    if (!tipo || !materia || !nivel) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Parâmetros incompletos.' }) };
    }

    const { prompt, temaUsado } = buildPrompt(tipo, materia, nivel, tema || '', foco || '', material || '');

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
            content: 'Você é professor especialista em elaboração de questões médicas seguindo a Portaria 413/2025 (ENAMED). Responda em português brasileiro com rigor clínico. Nunca use rótulos como [CASO CLÍNICO] ou [PERGUNTA] — escreva o conteúdo diretamente.'
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
