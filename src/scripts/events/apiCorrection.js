const correctAnswer = async (question, answer) => {
  const prompt = `verifique se a resposta ${answer} para a pergunta ${question} está minimamente correta. antes de sua resposta coloque correto caso a resposta esteja correta ou incorreto caso contrário, e caso esteja incorreta, explique a resposta"`;
  try {
    const apiKey = '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';
    const endpoint = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions'; // URL do endpoint da API da OpenAI

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await response.json();
    const quizQuestions = data.choices[0].message.content;
    console.log(quizQuestions);
    return quizQuestions;
  } catch (error) {
    console.error(error);
  }
};

export default correctAnswer;