import { renderAnswer } from "../renderer.js";

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
    const quizAnswer = data.choices[0].message.content;
    console.log(quizQuestions);
    var status = quizAnswer.match(/^(.*?)\./);
    var feedback = quizAnswer.match(/\.(.*)/);
    var correct;
    if (status == 'Correto'){
      correct = true;
    }else if (status == 'Incorreto') {
      correct = false;
    }
    renderAnswer(correct, feedback)
  } catch (error) {
    console.error(error);
  }
};

export default correctAnswer;