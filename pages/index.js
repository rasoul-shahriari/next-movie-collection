import Head from '@frontend/components/head';
import styled from 'styled-components';

const StyledIndex = styled.div`
  height: 20px;
  background-color: red;
  width: 100%;
`;
function App() {
  return (
    <>
      <Head title="first try" />
      <StyledIndex>33</StyledIndex>
    </>

  )
}

export default App;