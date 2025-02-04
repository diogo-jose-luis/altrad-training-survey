import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({name} :{name : string}) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      
      {/* <Body style={body}>
        <Container>
            <Text style={heading}>Hello {name}</Text>
            <Link href="https://google.com">www.google.com</Link>
        </Container>
      </Body> */}
      <Tailwind>
      <Body className="bg-white">
        <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://google.com">www.google.com</Link>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  );
};

const body:CSSProperties = {
  background : "#fff",
}

const heading: CSSProperties = {
  fontSize : '32px'
}

export default WelcomeTemplate;
