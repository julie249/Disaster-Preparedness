import React from "react";
import Accordion from "../components/UIcomponents";

const faqs = [
  {id: 'q1', title: 'How often should drills run?', summary: 'Recommended frequency', details: 'At least once per term; monthly if high risk.'},
  {id: 'q2', title: 'Who leads the drill?', summary: 'Roles', details: 'Designated teachers lead; admin coordinates.'},
  {id: 'q3', title: 'Where to find printable posters?', summary: 'Resource library', details: 'Visit Resources page for downloadable posters and templates.'}
];

export default function FAQ(){
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      <div className="mt-4"><Accordion items={faqs} /></div>
    </div>
  );
}
