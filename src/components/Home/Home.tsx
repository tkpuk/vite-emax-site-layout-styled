import React from 'react'
import {
  Card,
  CardBody,
  CardContainer,
  CardFooter,
  CardFooterLink,
  CardHeader,
} from '../Card/Card'

const Home = () => {
  return (
    <>
      <CardContainer>
        <Card>
          <CardHeader>Card head</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            saepe tempora, dolorem quas vitae natus sunt eligendi est
            perferendis nostrum!
          </CardBody>
          <CardFooter>
            <CardFooterLink to='#view-more'>View more</CardFooterLink>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>Card head</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro
            culpa quidem, minus, molestias voluptatem illo illum similique
            labore quae dicta!
          </CardBody>
        </Card>

        <Card>Home Card 4</Card>

        <Card primary>
          <CardHeader>Card head</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            saepe tempora, dolorem quas vitae natus sunt eligendi est
            perferendis nostrum!
          </CardBody>
          <CardFooter>
            <CardFooterLink to='#view-more'>View more</CardFooterLink>
          </CardFooter>
        </Card>
      </CardContainer>
    </>
  )
}

export default Home
