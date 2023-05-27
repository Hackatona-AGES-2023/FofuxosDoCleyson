const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const question = "Quando aconteceu a Revolução Francesa?";
const answer = "1906"

const correctAnswer = async (question, answer) => {
  const prompt = `corrija a resposta "${answer} para a pergunta ${question}. antes de sua resposta coloque correto ou incorreto dependendo se a pergunta estiver certa ou não e depois explique"`;

  try {
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 1000,
      top_p: 1.0,
      n: 10,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: "",
    });

    const quizQuestions = res.data.choices[0].text.split("\n");
    console.log(quizQuestions);
  } catch (error) {
    console.error(error);
  }
};

correctAnswer(question, answer);
