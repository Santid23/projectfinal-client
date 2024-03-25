import { Flex } from '@chakra-ui/react';
import Title from '../Title/Title';
import { useEffect, useState } from 'react';
import CompetitionsGrid from '../CompetitionsGrid/CompetitionsGrid';
import competitionsService from '../../services/competitions.service';
import competitionsJson from '../../mockCompetitions.json'

const FeaturedCompetitions = () => {
  const [competitions, setCompetitions] = useState([]);

  const getSixCompetitions = async () => {
    try {
      const competitions = await competitionsService.getAllCompetitions();
  
      if (competitions) {
        setCompetitions(competitionsJson.slice(0, 6));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSixCompetitions();
  }, []);

  return (
    <Flex width={'100%'} gap={'80px'} flexDir={'column'}>
      <Title>Competiciones Destacadas</Title>
      <CompetitionsGrid competitions={competitions} />
    </Flex>
  );
};

export default FeaturedCompetitions;
