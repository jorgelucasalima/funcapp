

export default function Funcionarios(requent, response) {
  response.status(200).json(
    [
      {
        id: 1,
        nome: "Jorge Lima",
        cargo: "Desenvolvedor",
        salario: "R$ 18.000,00",
      },
      {
        id: 2,
        nome: "Ayra Alves de Lima",
        cargo: "Médica",
        salario: "R$ 15.000,00",
      },
    ]
  );
}
