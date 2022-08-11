import questoes from "../bancoDeQuestoes";

export default (req, res) => {
  const idSelecionado = +req.query.id;

  const uniqQuestion = questoes.filter(
    (questao) => questao.id === idSelecionado
  );

  if (uniqQuestion.length === 1) {
    const questaoSelecionada = uniqQuestion[0].embaralharRespostas();
    res.status(200).json(questaoSelecionada.paraObjeto());
  } else {
    res.status(204).send();
  }
};
