const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const question = "Quando começou a Revolução Francesa?";
const answer = "1700";

const correctAnswer = async (question, answer) => {
  const prompt = `verifique se a resposta ${answer} para a pergunta ${question} está minimamente correta ou seja, se estiver dentro do periodo ou perto do certo, a resposta deve ser correta. antes de sua resposta coloque correto ou incorreto dependendo se a pergunta estiver certa ou não e caso esteja incorreta explique`;

  try {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const quizQuestions = res.data.choices[0];
    console.log(quizQuestions);
  } catch (error) {
    console.error(error);
  }
};

correctAnswer(question, answer);
