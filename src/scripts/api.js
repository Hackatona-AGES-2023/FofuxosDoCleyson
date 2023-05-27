const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const generateQuiz = async (theme, difficulty) => {
  const prompt = `Gere um quiz de 10 perguntas ${difficulty} sem as respostas sobre ${theme}.`;

  try {
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
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

generateQuiz("revolução industrial", "medias");
