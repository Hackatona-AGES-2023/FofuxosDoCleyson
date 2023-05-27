const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const question = "Quanto é 5";
const answer = "25";

const correctAnswer = async (question, answer) => {
  const prompt = `verifique se a resposta ${answer} para a pergunta ${question} está minimamente correta. antes de sua resposta coloque correto caso a resposta esteja correta ou incorreto caso contrario, e caso esteja incorreta, explique a resposta"`;

  try {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const quizQuestions = res.data.choices[0].message.content;
    console.log(quizQuestions);
    return quizQuestions;
  } catch (error) {
    console.error(error);
  }
};

export default { correctAnswer };
