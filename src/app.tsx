import { useState } from "react";
import { Dropdown, Select } from "antd";

export const App = () => {
  const clients = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" },
    { id: "16" },
    { id: "17" },
    { id: "18" },
    { id: "19" },
    { id: "20" },
    { id: "21" },
    { id: "22" },
    { id: "23" },
    { id: "24" },
    { id: "25" },
  ];

  return (
    <div className="sidebar">
      <div className="client-list">
        {clients.map((client, index) => (
          <ClientCard key={index} id={client.id} />
        ))}
      </div>
    </div>
  );
};

const ClientCard = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const assignments = [{ id: "1" }];
  const openReqs = [{ id: "1" }, { id: "2" }, { id: "3" }];

  return (
    <Dropdown
      open={isOpen}
      overlayClassName="client-body"
      trigger={["click"]}
      getPopupContainer={(trigger) => trigger}
      overlay={
        <div className="client-content">
          {assignments.map((assignment) => (
            <Assignment key={assignment.id} id={assignment.id} />
          ))}
          {openReqs.map((openReq) => (
            <OpenReq key={openReq.id} id={openReq.id} />
          ))}
        </div>
      }
    >
      <article className="client">
        <header
          className="client-header"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Client {id}
        </header>
      </article>
    </Dropdown>
  );
};

const Assignment = ({ id }: { id: string }) => {
  return <div className="assignment">Assignment {id}</div>;
};

const OpenReq = ({ id }: { id: string }) => {
  const proposals = [{ id: "1" }, { id: "2" }, { id: "3" }];

  const teamMembers = [
    { id: "1", name: "Team Member 1" },
    { id: "2", name: "Team Member 2" },
    { id: "3", name: "Team Member 3" },
  ];

  return (
    <Dropdown
      trigger={["click"]}
      getPopupContainer={(trigger) => trigger}
      overlay={
        <div className="open-req-content">
          {proposals.map((proposal) => (
            <Proposal key={proposal.id} id={proposal.id} />
          ))}
          <div style={{ padding: "0 8px" }}>
            <Select
              showSearch
              style={{ width: "100%" }}
              getPopupContainer={(trigger) => trigger}
              placeholder="Select a team member"
              options={teamMembers.map((teamMember) => ({
                value: teamMember.id,
                label: teamMember.name,
              }))}
            />
          </div>
        </div>
      }
    >
      <article className="open-req">
        <header className="open-req-header">Open Req {id}</header>
      </article>
    </Dropdown>
  );
};

const Proposal = ({ id }: { id: string }) => {
  return <div className="proposal">Proposal {id}</div>;
};
