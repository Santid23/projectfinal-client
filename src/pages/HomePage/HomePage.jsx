import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Flex } from '@chakra-ui/layout';
import FeaturedCompetitions from '../../components/FeaturedCompetitions/FeaturedCompetitions';

function HomePage() {
 
  return (
    <PageWrapper>
      <Flex>
        <FeaturedCompetitions />
      </Flex>
    </PageWrapper>
  );
}

export default HomePage;
