import { render, screen } from '@testing-library/react';
import DetailsPage from "./DetailsPage";

jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: 1 })
}))

describe('<DetailsPage/>', () => {
  test('should render', () => {
    const {container} = render(<DetailsPage />);
    expect(container).toMatchSnapshot();
  });

  test('should display task details', () => {
    render(<DetailsPage />);
    const taskId = screen.getByTestId('task-id');
    expect(taskId).toHaveTextContent('task: 1');
    const taskTitle = screen.getByTestId('task-title');
    expect(taskTitle).toHaveTextContent('Feature: my super feature');
    const taskStatus = screen.getByTestId('task-status');
    expect(taskStatus).toHaveTextContent('Status: DOING');
    const taskDescription = screen.getByTestId('task-description');
    expect(taskDescription).toHaveTextContent('Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit.');
  });
})