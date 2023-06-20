import React from 'react';
import styled from 'styled-components';
import iconBack from '../../../assets/image/icon-back.svg';
import iconMore from '../../../assets/image/icon-more.svg';
import iconSearch from '../../../assets/image/icon-search.svg';
import logoText from '../../../assets/logo/text-logo.svg';
import SearchBox from './SearchBox';
import FeedFilter from '../Filter/FeedFilter';
import MsButton from '../Button/MsButton';
import { useNavigate } from 'react-router-dom';

const HeaderStyle = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  background: var(--color-navy);
  position: fixed;
  width: 100%;
  .header-title {
    color: var(--color-lime);
    font-size: 14px;
  }
  button:not(.btn-back) {
    margin-left: auto;
  }
`;

// basic-header = <Header onMoreClick={handleMoreClick} text/>
// search-header = <Header search/>
// main-header = <Header onSearchClick={handleSearchClick} main/>
// upload-header = <Header onUploadClick={handleUploadClick} upload/>
// text-header = <Header text="text" onMoreClick={handleMoreClick}/>
export default function Header({
  text,
  search,
  upload,
  main,
  onUploadClick,
  onMoreClick,
  setFilterClick,
}) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <HeaderStyle>
      {main || (
        <button className='btn-back' type='button' onClick={handleBackClick}>
          <img src={iconBack} alt='뒤로 가기' />
        </button>
      )}
      {text?.length > 0 && <span className='header-title'>{text}</span>}
      {search && <SearchBox />}
      {text && (
        <button className='btn-more' type='button' onClick={onMoreClick}>
          <img src={iconMore} alt='더보기' />
        </button>
      )}
      {main && (
        <>
          <span className='header-title'>
            <img src={logoText} />
          </span>
          <FeedFilter setFilterClick={setFilterClick} />
          <button
            className='btn-search'
            type='button'
            onClick={handleSearchClick}
          >
            <img src={iconSearch} alt='검색하기' />
          </button>
        </>
      )}
      {upload && <MsButton text='업로드' onClick={onUploadClick} />}
    </HeaderStyle>
  );
}
