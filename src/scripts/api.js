const generateQuiz = async (theme, difficulty) => {
  console.log(theme + " " + difficulty);
  const prompt = `Gere um quiz de 10 perguntas ${difficulty} sem as respostas sobre ${theme}.`;

  try {
    const apiKey = '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';
    const endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions'; // URL do endpoint da API da OpenAI

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 1000,
        top_p: 1.0,
        n: 10,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ""
      })
    });

    const data = await response.json();
    const quizQuestions = data.choices[0].text.split("\n");
    console.log(quizQuestions);
  } catch (error) {
    console.error(error);
  }
};
