import { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Title, InnerWrapper } from 'components/organism/TicketsAndTasks';
//types
import { Task } from 'types/Task';

export const List = styled.ul`
  grid-column: 1/-1;
  margin-top: 20px;
  li {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
    padding: 16px 20px;
    &:nth-last-child(1) {
      border-bottom: none;
    }
    div {
      display: flex;
      align-items: center;
      p {
        margin-left: 10px;
      }
    }
  }
`;
interface StatusProps {
  status: 'new' | 'urgent' | 'default';
}

export const Status = styled.div<StatusProps>`
  color: ${({ status, theme }) =>
    status === 'new' || status === 'urgent' ? 'white' : theme.colors.gray1};
  padding: 5px 8px;
  border-radius: 6px;
  background-color: ${({ theme, status }) => {
    if (status === 'new') return '#29CC97';
    if (status === 'urgent') return '#FEC400';
    return '#F0F1F7';
  }};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const mockedData: Task[] = [
  {
    text: 'Finish ticket update',
    status: 'urgent',
    finished: false,
    id: '1',
  },
  {
    text: 'Create new ticket example',
    status: 'new',
    finished: false,
    id: '2',
  },
  {
    text: 'Update ticket reporte',
    status: 'default',
    finished: true,
    id: '3',
  },
];

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(mockedData);

  const handleChange = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          finished: !task.finished,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <InnerWrapper>
      <Title>Tasks</Title>
      <Link className="link" to="/tasks">
        View All
      </Link>
      <h6>
        <small>Today</small>
      </h6>
      <List>
        {tasks.map(({ text, status, finished, id }) => (
          <li key={id}>
            <div>
              <input
                type="checkbox"
                name="status"
                id="status"
                checked={finished}
                onChange={() => handleChange(id)}
              />
              <p>{text}</p>
            </div>
            <Status status={status}>{status}</Status>
          </li>
        ))}
      </List>
    </InnerWrapper>
  );
};
