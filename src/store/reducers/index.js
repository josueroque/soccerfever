import { combineReducers } from 'redux';
import teamsReducer from './teamsReducers';
import countriesReducer from './countriesReducer';
import seasonsReducer from './seasonsReducer';
import fixturesReducer from './fixturesReducer';
import leaguesReducer from './leaguesReducer';

export default combineReducers({
    teams: teamsReducer,
    countries: countriesReducer,
    seasons:seasonsReducer,
    fixtures:fixturesReducer,
    leagues:leaguesReducer
});