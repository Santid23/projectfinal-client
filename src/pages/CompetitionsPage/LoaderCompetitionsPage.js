import competitionsService from '../../services/competitions.service';

const LoaderCompetitionsPage = async () => {
  const competitions = await competitionsService.getAllCompetitions();

  return competitions;
};

export default LoaderCompetitionsPage;
