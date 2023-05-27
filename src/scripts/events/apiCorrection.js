import { renderAnswer } from "../renderer.js";

const correctAnswer = async (question, answer, index) => {
  const prompt = `verifique se a resposta ${answer} para a pergunta ${question} está minimamente correta. antes de sua resposta coloque correto caso a resposta esteja correta ou incorreto caso contrário, e caso esteja incorreta, explique a resposta"`;
  try {
    const apiKey = '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';
    const endpoint = 'https://api.openai.com/v1/chat/completions'; // URL do endpoint da API da OpenAI

    console.log(apiKey)
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [
            {
              "role": "user",
              "content": prompt
            }
          ]
        
      })
    });
    const data = await response.json();
    const quizAnswer = data.choices[0].message.content;
    var status = quizAnswer.match(/^(.*?)\./);
    var feedback = quizAnswer.match(/\.(.*)/);
    var correct = false;
    if (status[1].toLowerCase() == 'correto'){
      correct = true;
    }
    renderAnswer(correct, feedback[1], index)
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default correctAnswer;