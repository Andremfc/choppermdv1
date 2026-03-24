// ===== TEMAS ALEATÓRIOS POR MATÉRIA =====
const TEMAS = {
  'Pneumologia': [
    'Pneumonia adquirida na comunidade — critérios diagnósticos e antibioticoterapia empírica',
    'DPOC exacerbado — fisiopatologia e manejo farmacológico',
    'Asma moderada/grave — classificação GINA e escada terapêutica',
    'Insuficiência respiratória hipoxêmica — causas e abordagem inicial',
    'Derrame pleural — diagnóstico diferencial entre transudato e exsudato',
    'Tromboembolismo pulmonar — apresentação clínica e estratificação de risco',
    'Pneumotórax espontâneo — fisiopatologia e conduta',
    'Bronquiectasias — causas e manejo das exacerbações',
  ],
  'Neurologia': [
    'AVC isquêmico — fisiopatologia, território vascular e conduta aguda',
    'Epilepsia — classificação das crises e anticonvulsivantes de primeira linha',
    'Doença de Parkinson — tríade clínica e farmacoterapia',
    'Demência de Alzheimer — critérios diagnósticos e tratamento',
    'Meningite bacteriana — agentes etiológicos e antibioticoterapia empírica',
    'Cefaleia — diagnóstico diferencial entre enxaqueca e cefaleia tensional',
    'Esclerose múltipla — apresentação clínica e critérios de McDonald',
    'Síndrome de Guillain-Barré — fisiopatologia e evolução clínica',
  ],
  'Psiquiatria': [
    'Depressão Maior — critérios DSM-5 e antidepressivos de primeira linha',
    'Transtorno de Ansiedade Generalizada — diagnóstico e tratamento',
    'Episódio psicótico inicial — diagnóstico diferencial e abordagem',
    'Transtorno Bipolar — fases e estabilizadores de humor',
    'Esquizofrenia — hipótese dopaminérgica e antipsicóticos',
    'Insônia — fisiologia do sono e hipnóticos',
    'Transtorno de Pânico — fisiopatologia e tratamento farmacológico',
    'Dependência química — síndrome de abstinência alcóolica',
  ],
  'Ortopedia/Reumatologia': [
    'Osteoartrose de joelho — fisiopatologia e tratamento escalonado',
    'Artrite Reumatoide — critérios diagnósticos ACR/EULAR e DMARDs',
    'Gota — metabolismo das purinas, fisiopatologia e tratamento da crise',
    'Lúpus Eritematoso Sistêmico — critérios diagnósticos e órgãos-alvo',
    'Espondiloartrite — diagnóstico diferencial e tratamento',
    'Osteoporose — fatores de risco, prevenção e bifosfonatos',
    'Fibromialgia — critérios diagnósticos e abordagem multidisciplinar',
    'Síndrome do túnel do carpo — diagnóstico clínico e eletroneuromiografia',
  ],
  'Urgência e Emergência': [
    'Parada cardiorrespiratória — algoritmos ACLS para FV/TVSP e AESP/assistolia',
    'Choque séptico — critérios SOFA, bundle de 1 hora e vasopressores',
    'Politrauma — abordagem primária ATLS e controle de hemorragia',
    'Intubação em sequência rápida — indicações, drogas e técnica',
    'Pneumotórax hipertensivo — diagnóstico clínico e descompressão imediata',
    'Infarto agudo do miocárdio com supra de ST — reperfusão e antiplaquetários',
    'Acidente vascular cerebral — janela terapêutica e critérios para trombólise',
    'Cetoacidose diabética — diagnóstico, hidratação e insulinoterapia',
  ],
  'Tutoria': [
    'Raciocínio clínico — construção de hipóteses diagnósticas a partir do caso',
    'Correlação entre fisiopatologia e manifestações clínicas',
    'Diagnóstico diferencial baseado em caso clínico estruturado',
    'Integração entre componentes curriculares no manejo do paciente',
    'Medicina baseada em evidências — interpretação de estudos clínicos',
    'Comunicação médico-paciente e anamnese estruturada',
  ],
  'Fisiologia': [
    'Fisiologia respiratória — relação V/Q, shunt e espaço morto',
    'Fisiologia cardiovascular — ciclo cardíaco, Frank-Starling e débito cardíaco',
    'Fisiologia renal — mecanismos de concentração urinária e regulação do sódio',
    'Neurofisiologia — potencial de ação, sinapse e controle motor',
    'Fisiologia endócrina — eixo hipotálamo-hipófise e retroalimentação',
    'Fisiologia gastrointestinal — digestão, absorção e motilidade',
    'Fisiologia da dor — nociceptores, vias ascendentes e modulação descendente',
    'Fisiologia do exercício — adaptações cardiorrespiratórias ao esforço',
  ],
  'Anatomia': [
    'Anatomia do mediastino — compartimentos e estruturas contidas',
    'Anatomia do coração — câmaras, valvas e irrigação coronariana',
    'Anatomia do sistema nervoso central — lobos cerebrais e funções',
    'Anatomia do abdome — vísceras, vascularização e inervação',
    'Anatomia da coluna vertebral — segmentos e estruturas adjacentes',
    'Anatomia do membro inferior — compartimentos e nervos',
    'Anatomia do tórax — paredes, pleura e pulmões',
    'Anatomia da pelve — estruturas femininas e masculinas',
  ],
  'Bioquímica': [
    'Metabolismo de carboidratos — glicólise, gliconeogênese e glicogênio',
    'Ciclo de Krebs e cadeia respiratória — produção de ATP',
    'Metabolismo lipídico — beta-oxidação e síntese de ácidos graxos',
    'Metabolismo das purinas e pirimidinas — hiperuricemia e gota',
    'Enzimas — cinética, inibição e regulação alostérica',
    'Síntese de neurotransmissores — dopamina, serotonina e GABA',
    'Espécies reativas de oxigênio e mecanismos antioxidantes',
    'Bioquímica dos prostanóides — prostaglandinas e tromboxanos',
  ],
  'Farmacologia': [
    'Farmacocinética — absorção, distribuição, metabolismo e excreção',
    'Farmacodinâmica — receptores, agonistas e antagonistas',
    'Antibióticos — classificação por mecanismo de ação e resistência bacteriana',
    'Anti-inflamatórios — AINEs, corticoides e seus mecanismos',
    'Antihipertensivos — classes farmacológicas e indicações clínicas',
    'Anticoagulantes e antiagregantes — mecanismos e monitorização',
    'Antidiabéticos orais — mecanismos de ação e indicações',
    'Interações medicamentosas — mecanismos farmacocinéticos e farmacodinâmicos',
  ],
  'Histologia': [
    'Tecido epitelial — tipos, funções e junções celulares',
    'Tecido conjuntivo — componentes da matriz extracelular e células',
    'Tecido muscular — diferenças entre liso, estriado e cardíaco',
    'Tecido nervoso — neurônios, glia e sinapses',
    'Histologia do rim — néfron, corpúsculo renal e túbulos',
    'Histologia do fígado — lóbulo hepático e células de Kupffer',
    'Histologia do pulmão — epitélio respiratório e pneumócitos',
    'Histologia das glândulas endócrinas — hipófise, tireoide e suprarrenal',
  ],
  'Patologia': [
    'Inflamação aguda — mediadores, exsudato e evolução',
    'Inflamação crônica — granulomas e células envolvidas',
    'Necrose e apoptose — diferenças morfológicas e mecanismos',
    'Cicatrização — fases e fatores que comprometem a reparação',
    'Neoplasias — diferenças entre benigno e maligno, invasão e metástase',
    'Aterosclerose — fisiopatologia e complicações',
    'Trombose e embolia — fatores de risco e consequências',
    'Patologia tumoral — oncogenes, genes supressores e carcinogênese',
  ],
  'Microbiologia/Imunologia': [
    'Imunidade inata e adaptativa — células e mecanismos efetores',
    'Linfócitos T e B — ativação, diferenciação e funções',
    'Anticorpos — classes, funções e hipersensibilidade',
    'Hipersensibilidade tipos I a IV — mecanismos e exemplos clínicos',
    'Bacteriologia — estrutura bacteriana, virulência e resistência',
    'Virologia — ciclo replicativo viral e mecanismos de evasão imune',
    'Vacinas — tipos, mecanismos de imunização e calendário vacinal',
    'Infecções oportunistas — agentes e contextos de imunossupressão',
  ],
  'Biologia Celular e Molecular': [
    'Ciclo celular — fases, checkpoints e oncogenes',
    'Apoptose — via intrínseca e extrínseca, caspases',
    'Expressão gênica — transcrição, tradução e regulação',
    'Mitocôndrias — fosforilação oxidativa e disfunção mitocondrial',
    'Sinalização celular — receptores de membrana e vias intracelulares',
    'Bases moleculares do câncer — mutações driver e oncogênese',
    'Terapias biológicas — anticorpos monoclonais e alvos moleculares',
    'Bases moleculares da neurodegeneração — misfolding proteico e agregação',
  ],
};

// ===== FORMATOS POR TIPO DE QUESTÃO =====
const FORMATOS = {
  QOME: `FORMATO QOME — MÚLTIPLA ESCOLHA:
[CASO CLÍNICO completo com QP, HDA, EF e exames complementares]

[PERGUNTA COM COMANDO CLARO E DESTACADO]

A) [alternativa]

B) [alternativa]

C) [alternativa]

D) [alternativa]

GABARITO: [letra] — [explicação didática completa]`,

  QOOI: `FORMATO QOOI — ORDENAÇÃO DE ITENS:
[CASO CLÍNICO]

Considere os itens a seguir:
I- [item]
II- [item]
III- [item]
IV- [item]

Marque a alternativa que contém a ordem/sequência correta.

A) [sequência]
B) [sequência]
C) [sequência]
D) [sequência]

GABARITO: [letra] — [justificativa da ordem]`,

  QOAS: `FORMATO QOAS — ANÁLISE DE SENTENÇAS:
[CASO CLÍNICO]

Analise as sentenças a seguir.
I- [sentença]
II- [sentença]
III- [sentença]
IV- [sentença]

É correto o que se afirma em:

A) [combinação]
B) [combinação]
C) [combinação]
D) [combinação]

GABARITO: [letra] — [análise sentença por sentença]`,

  QOVF: `FORMATO QOVF — VERDADEIRO OU FALSO:
[CASO CLÍNICO]

Classifique V para as sentenças verdadeiras e F para as falsas:
( ) [sentença]
( ) [sentença]
( ) [sentença]
( ) [sentença]

Assinale a alternativa que contém a sequência correta.

A) V-V-F-F
B) V-F-V-F
C) F-V-V-F
D) F-F-V-V

GABARITO: [letra] — [classificação justificada de cada sentença]`,

  QOAR: `FORMATO QOAR — ASSERÇÃO E RAZÃO:
[CASO CLÍNICO]

I- [proposição clínica]

PORQUE

II- [razão/justificativa]

A respeito dessas asserções, assinale a opção correta.

A) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.
B) As asserções I e II são proposições verdadeiras, mas a II não é justificativa correta da I.
C) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.
D) A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.

GABARITO: [letra] — [análise detalhada das asserções]`,
};

// ===== REGRAS ENAMED =====
const REGRAS_ENAMED = `REGRAS OBRIGATÓRIAS — PORTARIA 413/2025 (ENAMED):
1. Enunciado MAIOR que o conjunto de alternativas
2. Caso clínico OBRIGATÓRIO na ordem: queixa principal → história do paciente → exame físico → exames complementares
3. Alternativas TOTALMENTE corretas ou TOTALMENTE incorretas — JAMAIS mistas
4. Distratores verossímeis, técnicos e com tamanho homogêneo entre si
5. PROIBIDO: EXCETO, "todas são verdadeiras", "todas são falsas"
6. PROIBIDO no enunciado e alternativas: frequentemente, normalmente, exclusivamente, apenas, sempre, nunca
7. Ordem direta nas sentenças: sujeito + verbo + complemento
8. Se as alternativas iniciam com verbo, TODAS iniciam com verbo; se com artigo, TODAS com artigo
9. Comando da questão claro e destacado
10. Não misturar informações corretas e incorretas na mesma alternativa`;

// ===== FUNÇÃO PRINCIPAL =====
function buildPrompt(tipo, materia, nivel, temaUsuario) {
  const temasDisponiveis = TEMAS[materia] || TEMAS['Tutoria'];
  const temaFinal = temaUsuario && temaUsuario.trim()
    ? temaUsuario.trim()
    : temasDisponiveis[Math.floor(Math.random() * temasDisponiveis.length)];

  const formato = FORMATOS[tipo] || FORMATOS['QOME'];

  const prompt = `Você é professor experiente do curso de Medicina, especialista em elaboração de questões seguindo rigorosamente a PORTARIA 413/2025 (ENAMED).

Gere UMA questão para estudantes do 6º período de Medicina (Afya UniDomPedro, Salvador-BA).
Matéria: ${materia}
Tema: ${temaFinal}
Tipo: ${tipo}
Dificuldade: ${nivel}

${REGRAS_ENAMED}

Siga EXATAMENTE o formato abaixo:

${formato}`;

  return { prompt, temaUsado: temaFinal };
}

module.exports = { buildPrompt, TEMAS };
