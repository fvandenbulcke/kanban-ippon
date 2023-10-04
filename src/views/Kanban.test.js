import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Kanban from './Kanban';



describe('<Kanban/>', () => {
  describe('Initial rendering', () => {
    test('should display TODO column', () => {
      render(<Kanban/>);
      const todoColumn = screen.getByTestId('todo-column');
      expect(todoColumn).toBeInTheDocument();
    });

    test('should display 5 tasks in TODO column', () => {
      render(<Kanban/>);
      const todoColumn = screen.getByTestId('todo-column');
      const tasks = within(todoColumn).getAllByTestId(/task-\d+$/)
      expect(tasks.length).toEqual(5);
    });
    
    test('should display DOING column', () => {
      render(<Kanban/>);
      const doingColumn = screen.getByTestId('doing-column');
      expect(doingColumn).toBeInTheDocument();
    });

    test('should display 2 tasks in DOING column', () => {
      render(<Kanban/>);
      const doingColumn = screen.getByTestId('doing-column');
      const tasks = within(doingColumn).getAllByTestId(/task-\d+$/)
      expect(tasks.length).toEqual(2);
    });
    
    test('should display DONE column', () => {
      render(<Kanban/>);
      const doneColumn = screen.getByTestId('done-column');
      expect(doneColumn).toBeInTheDocument();
    });

    test('should display 3 tasks in DONE column', () => {
      render(<Kanban/>);
      const doneColumn = screen.getByTestId('done-column');
      const tasks = within(doneColumn).getAllByTestId(/task-\d+$/)
      expect(tasks.length).toEqual(3);
    });
  })

  describe('task move', () => {
    test('should not be able to move a task from TODO column to a previous one', () => {
      render(<Kanban/>);
      const todoColumn = screen.getByTestId('todo-column');
      const previousColumnActionArrows = within(todoColumn).queryByTestId(/task-\d+-to-previous$/)
      expect(previousColumnActionArrows).toBeNull();
    });

    test('should be able to move a task from TODO column to DOING one', () => {
      render(<Kanban/>);
      userEvent.click(screen.getByTestId('task-6-to-next'))
      const doingColumn = screen.getByTestId('doing-column');
      const task6 = within(doingColumn).queryByTestId('task-6')
      expect(task6).not.toBeNull();
    });

    test('should be able to move a task from DOING column to DONE one', () => {
      render(<Kanban/>);
      userEvent.click(screen.getByTestId('task-5-to-next'))
      const doneColumn = screen.getByTestId('done-column');
      const task5 = within(doneColumn).queryByTestId('task-5')
      expect(task5).not.toBeNull();
    });

    test('should be able to move a task from DOING column to TODO one', () => {
      render(<Kanban/>);
      userEvent.click(screen.getByTestId('task-5-to-previous'))
      const todoColumn = screen.getByTestId('todo-column');
      const task5 = within(todoColumn).queryByTestId('task-5')
      expect(task5).not.toBeNull();
    });

    test('should be able to move a task from DONE column to DOING one', () => {
      render(<Kanban/>);
      userEvent.click(screen.getByTestId('task-3-to-previous'))
      const doingColumn = screen.getByTestId('doing-column');
      const task3 = within(doingColumn).queryByTestId('task-3')
      expect(task3).not.toBeNull();
    });

    test('should not be able to move a task from DONE column to a next one', () => {
      render(<Kanban/>);
      const doneColumn = screen.getByTestId('done-column');
      const nextColumnActionArrows = within(doneColumn).queryByTestId(/task-\d+-to-next$/)
      expect(nextColumnActionArrows).toBeNull();
    });
  })
})
