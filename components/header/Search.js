import styled, { css } from 'styled-components'
import { searchImg } from '../../images' 

const Search = () => {
	return (
		<Root>
			<SearchInput placeholder={'TRAŽI...'}/>
			<SearchIconWrapper>
				<SearchIcon src={searchImg} />
			</SearchIconWrapper>
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	width: 110px;
	height: 30px;
	background: #FFFFFF;
	border-radius: 30px;
`

const SearchIconWrapper = styled.div`
	padding-top: 7px;
	padding-bottom: 7px;
	padding-right: 6px;

`

const SearchIcon = styled.img`
	width: 16px;
	height: 16px;
`

const SearchInput = styled.input`
	width: 80px;
	border-radius: 30px;
	border: none;
	padding-left: 20px;
	font-family: 'Mulish';
	font-style: normal;
	font-size: 12px;
	line-height: 15px;

	/* identical to box height */
	text-transform: uppercase;

	/* Secondary grey */
	color: #989DA3;
`

export default Search