import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxList from '../checkList';

test('should toggle checkboxes when clicked', async () => {
    render(<CheckboxList />);
  
    const checkboxes = screen.getAllByRole('checkbox');
    const checkbox = checkboxes[0] as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  
    await fireEvent.click(checkbox);
  
    expect(checkbox.checked).toBe(true);
  });
  
  test('should delete a list item when delete button is clicked', async () => {
    render(<CheckboxList />);
  
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
    expect(screen.queryByText('Task 1')).not.toBe(null);
  
    const deleteButtons = screen.queryAllByRole('button', { name: 'delete' });
    expect(deleteButtons).toHaveLength(4);

    await fireEvent.click(deleteButtons[0]);
  
    const updatedListItems = screen.queryAllByRole('listitem');
    expect(updatedListItems).toHaveLength(3);
    expect(screen.queryByText('Task 1')).toBeNull();
  });
