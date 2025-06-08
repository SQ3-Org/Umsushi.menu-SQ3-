export interface Cardapio {
  id: number;
  nome: string;
  descricao?: string;
  dataInicio?: Date;
  dataFim?: Date;
  produtos: number[]; // lista de IDs de produtos incluídos nesse cardápio
  ativo: boolean; // se está habilitado para exibição
}
