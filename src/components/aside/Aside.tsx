import './styles.scss';

import { categories } from '../../constant/category';

type Props = {
  search: 'all' | 'ui' | 'ux' | 'enhancement' | 'bug' | 'feature';
};

const Aside = ({ search }: Props) => {
  const handleSearchCategorie = (categorie: string) => {
    console.log(categorie);
  };

  return (
    <aside className="aside-container">
      <div className="front-end-div radius-10"></div>
      <ul className="categories-div radius-10">
        {categories.map((categorie) => (
          <li
            key={categorie}
            onClick={() => handleSearchCategorie(categorie)}
            className={`${
              search === categorie.toLowerCase() ? '&__active' : ''
            }`}
          >
            {categorie}
          </li>
        ))}
      </ul>
      <div className="roadmap-div radius-10"></div>
    </aside>
  );
};

export default Aside;
