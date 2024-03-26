import React from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import { Flex } from '@chakra-ui/layout'
import Title from '../../components/Title/Title'
import CompetitionsGrid from '../../components/CompetitionsGrid/CompetitionsGrid'
import { useLoaderData } from 'react-router-dom'

function CompetitionsPage() {

  const competitions = useLoaderData();

  return (
    <PageWrapper>
      <Flex flexDir={"column"} gap={"80px"}>
        <Title>Todas las competiciones</Title>
        <CompetitionsGrid competitions={competitions} />
        console.log(competitions)
      </Flex>
    </PageWrapper>
  )
}

export default CompetitionsPage