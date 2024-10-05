import { Container, Title, Text, Button } from '@mantine/core';
import classes from './home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              UBS CRM
            </Title>

            <Text className={classes.description} mt={30}>
              One stop management solution for RMs to service their clients.
            </Text>

            <Button
              component={Link}
              href="/auth"
              variant="gradient"
              size="xl"
              className={classes.control}
              mt={40}
            >
              Login
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
