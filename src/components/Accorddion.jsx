import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { schedule } from '../constants';

const Accorddion = () => {
  return (
    <Accordion preExpanded={['a']}>
      <AccordionItem uuid="a">
          <AccordionItemHeading>
              <AccordionItemButton>
                  <p className='mt-[-25px] ml-[40px] font-bebas text-[22px] underline underline-offset-4 decoration-2'>MOUNTAIN 1</p>
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='ml-[20px]'>
              <h3 className='font-oswald font-semibold text-[30px] text-terciary'>
                SCHEDULE
              </h3>
              {schedule.map((date) => (
                <div className='flex flex-row justify-between w-[300px]'>
                  <p className='font-lato tracking-wide'>{date.date}</p>
                  <p className='font-lato tracking-wide'>{date.title}</p>
                </div>
              ))}
            </div>
          </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
          <AccordionItemHeading>
              <AccordionItemButton>
                  <p className='mt-[-25px] ml-[40px] font-bebas text-[22px] underline underline-offset-4 decoration-2'>MOUNTAIN 2</p>
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='ml-[20px]'>
              <h3 className='font-oswald font-semibold text-[30px] text-terciary'>
                SCHEDULE
              </h3>
              {schedule.map((date) => (
                <div className='flex flex-row justify-between w-[300px]'>
                  <p className='font-lato tracking-wide'>{date.date}</p>
                  <p className='font-lato tracking-wide'>{date.title}</p>
                </div>
              ))}
            </div>
          </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default Accorddion
