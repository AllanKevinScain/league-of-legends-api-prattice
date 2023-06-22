import { render } from '@testing-library/react';
import { CardList } from '.';

const props = [
  {
    index: 0,
    history:
      'Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra, e a única coisa capaz de derrotá-los foi um tipo de feitiçaria mortal e traiçoeira. Mas após séculos de...',
    id: '01373b0a-86fa-44ae-a7e5-e630ef961f98',
    championName: 'Aatrox',
    nickname: 'a Espada Darkin',
  },
  {
    index: 1,
    history:
      'A ligação de Ahri com a magia do mundo espiritual é inata. Ela é uma vastaya com traços de raposa, capaz de manipular as emoções de sua presa e consumir sua essência, devorando também as memórias e as percepções de cada alma absorvida. Outrora uma...',
    id: '7ea934e1-d248-4941-a250-0b7721f44677',
    championName: 'Ahri',
    nickname: 'a Raposa de Nove Caudas',
  },
  {
    index: 2,
    history:
      'Abandonando a Ordem Kinkou e seu título de Punho das Sombras, Akali agora ataca sozinha, pronta para ser a arma mortal que seu povo precisa. Embora ela mantenha tudo o que aprendeu com seu mestre Shen, ela se comprometeu a defender Ionia de seus...',
    id: '66a1f448-00b0-499e-96a3-92b6d88c24c7',
    championName: 'Akali',
    nickname: 'a Assassina Renegada',
  },
];

describe('<CardList />', () => {
  it('should render posts', () => {
    render(<CardList {...props} />);

    // expect(screen.getAllByRole('heading', { name: /championname/i })).toHaveLength(3);
    // expect(screen.getAllByRole('img')).toHaveLength(3);
    // expect(screen.getAllByText(/championName/i)).toHaveLength(3);
  });
});
