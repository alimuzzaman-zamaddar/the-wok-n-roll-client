import React from "react";
import { Accordion, Container } from "react-bootstrap";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blogs = () => {
  return (
    <Container className="bg-dark">
      <Pdf targetRef={ref} filename="blogs.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>


            <h3>
              1.What are the differences between uncontrolled and controlled
              components?
            </h3>

            <p> In react, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.In React,
            controlled components refer to components that have their state and
            behavior controlled by the parent component. These components rely
            on props passed down from the parent component to update their state
            and behavior. Uncontrolled components refer to components that
            manage their own state internally.</p>
           

            <h3>2.How to validate React props using PropTypes?</h3>
            <p>  When developing a react application, you all need to structure and
            define your props to avoid bugs and errors. Just like a function
            might have mandatory arguments, a React component might require a
            prop to be defined, otherwise, it will not render properly.
            Forgetting to pass a required prop into a component that needs it
            could cause your app to behave unexpectedly.To pass props between
            components, you can add them when the component is called, just like
            you would pass arguments when calling on a regular JavaScript
            function.</p>
          

            <h3>3.What are the difference between nodejs and express js?</h3>
          </Accordion.Header>
          <Accordion.Body>
            Use Cases of NodeJS This section analyses some various types of apps
            that can be built using this framework. When hiring, a NodeJS
            developers resume should have instances of contributing to the
            development of some of these applications. rendering for SPA As a
            server-side technology for modern web applications, NodeJS works
            well with single-page applications (SPAs) that are powered by
            JavaScript on the front end. Server-side rendering allows you to
            render your templates on the server as opposed to in the browser.
            Data Streaming Apps NodeJS allows developers to take advantage of
            HTTP requests to stream data from the client to the server and vice
            versa, without having to buffer the information in the memory
            beforehand, making it a perfect fit for media streaming platforms.
            just well.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3>
              {" "}
              4.What is a custom hook, and why will you create a custom hook?
            </h3>
          </Accordion.Header>
          <Accordion.Body>
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.Custom React JS hooks
            offer reusability as when a custom hook is created, it can be reused
            easily, which makes the code cleaner and reduces the time to write
            the code. It also enhances the rendering speed of the code as a
            custom hook does not need to be rendered again and again while
            rendering the whole code.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Blogs;
