const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const generateQuiz = async () => {
  const prompt = "Gere um quiz de 10 perguntas sobre quimica orgânica.";

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

generateQuiz();
