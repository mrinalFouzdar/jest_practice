import { Container } from 'react-bootstrap';
import './App.css';
import SummaryForm from './pages/summary/SummaryForm';
import Orderentry from './pages/entry/OrderEntry';
import { OrderDetailsProvider } from './contexts/OrderDetails';

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
      {/* <SummaryForm/> */}
      <Orderentry/>
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
