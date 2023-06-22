import { render, screen } from '@testing-library/react';
import { Card } from '.';
const props = {
  championName: 'Aatrox',
  nickname: 'O açougueiro de quinta',
};

describe('<Card />', () => {
  it('should render the card', () => {
    render(<Card {...props} />);

    const img = expect(screen.getByRole('img'));
    img.toBeInTheDocument();
    img.toHaveAttribute('alt', 'thumbnail');
    img.toHaveAttribute(
      'src',
      `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.championName}_0.jpg`,
    );

    let title = expect(screen.getByRole('heading', { name: `${props.championName} - ${props.nickname}` }));
    title.toBeInTheDocument();

    title = expect(screen.getByText(`${props.championName} - ${props.nickname}`));
    title.toBeInTheDocument();

    const link = expect(screen.getByRole('link'));
    link.toBeInTheDocument();
    link.toHaveAttribute('href', `https://www.leagueoflegends.com/pt-br/champions/${props.championName.toLowerCase()}`);
  });

  it('should match snpashot', () => {
    const { container } = render(<Card {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
