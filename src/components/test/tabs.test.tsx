import { render, screen, fireEvent } from '@testing-library/react';
import ColorTabs from '../tabs';

describe('ColorTabs', () => {
    it('should render tabs with labels', () => {
      render(<ColorTabs />);
      
      // Check if the tabs with labels are initially rendered
      expect(screen.getByText('All')).toBeTruthy();
      expect(screen.getByText('Today')).toBeTruthy();
      expect(screen.getByText('Work')).toBeTruthy();
    });
  
    it('should render an "Add" icon tab', () => {
      render(<ColorTabs />);
      
      // Check if the "Add" icon tab is initially rendered
      const addButton = screen.getByLabelText('add')
      expect(addButton).toBeTruthy();

      // Click the "Add" icon and create a new tab
      fireEvent.click(addButton)
      //expect you are focused on an empty input 
      // type in the input
      // press enter
      // expect a new tab
    });
  
    it('should change tabs when clicked', () => {
      render(<ColorTabs />);
      
      // Get the tabs
      const allTab = screen.getByText('All');
      const todayTab = screen.getByText('Today');
      const workTab = screen.getByText('Work');
      
      // Initially, "All" tab should be selected
      expect(allTab.getAttribute('class')).toContain('Mui-selected');
      expect(todayTab.getAttribute('class')).not.toContain('Mui-selected');
      expect(workTab.getAttribute('class')).not.toContain('Mui-selected');
      
      // Click "Today" tab and check if it's selected
      fireEvent.click(todayTab);
      expect(allTab.getAttribute('class')).not.toContain('Mui-selected');
      expect(todayTab.getAttribute('class')).toContain('Mui-selected');
      expect(workTab.getAttribute('class')).not.toContain('Mui-selected');
      
      // Click "Work" tab and check if it's selected
      fireEvent.click(workTab);
      expect(allTab.getAttribute('class')).not.toContain('Mui-selected');
      expect(todayTab.getAttribute('class')).not.toContain('Mui-selected');
      expect(workTab.getAttribute('class')).toContain('Mui-selected');
    });
  });

  
  
  