/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals }) => {
	return (
		<>
			<Search />
			{mylist.length > 0 && (
				<Categories title='Mi Lista'>
					<Carousel>
						{mylist.map((item) => (
							<CarouselItem key={`${item.id}_mylist`} {...item} isList />
						))}
					</Carousel>
				</Categories>
			)}
			<Categories title='tendencias'>
				<Carousel>
					{trends.map((item) => (
						<CarouselItem key={`${item.id}_trends`} {...item} />
					))}
				</Carousel>
			</Categories>
			<Categories title='Originales de PlatziVideo'>
				<Carousel>
					{originals.map((item) => (
						<CarouselItem key={`${item.id}_originals`} {...item} />
					))}
				</Carousel>
			</Categories>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		mylist: state.mylist,
		trends: state.trends,
		originals: state.originals,
	};
};
// export default Home;
export default connect(mapStateToProps, null)(Home);
// example: export default connect(props, actions)(Home);
