import { parseAliases } from './aliases';

describe('parseAliases', () => {
  it('should convert a valid aliases string', () => {
    const aliases = 'Bruce Wayne\nThe Caped Crusader\nThe Dark Knight\nThe World\'s Greatest Detective\nThe Dark Knight Detective\nMatches Malone\nGotham Knight\nDetective\nBats\nThe Bat\nMaster Wayne\nKnight of Vengeance\nThe Goddamn Batman\nJack Shaw\nGod of Knowledge\nInsider\nMordecai Wayne\nArchivist\nNero Nykto\nMayor Wayne\nBruno Diaz\nBruce Thomas Wayne';

    const result = parseAliases(aliases);

    expect(result).toEqual([
      'Bruce Wayne',
      'The Caped Crusader',
      'The Dark Knight',
      "The World's Greatest Detective",
      'The Dark Knight Detective',
      'Matches Malone',
      'Gotham Knight',
      'Detective',
      'Bats',
      'The Bat',
      'Master Wayne',
      'Knight of Vengeance',
      'The Goddamn Batman',
      'Jack Shaw',
      'God of Knowledge',
      'Insider',
      'Mordecai Wayne',
      'Archivist',
      'Nero Nykto',
      'Mayor Wayne',
      'Bruno Diaz',
      'Bruce Thomas Wayne'
    ]);
  });
})