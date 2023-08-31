import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import format from 'date-fns/format';
import { Button, Label, Input } from 'reactstrap';

const DateRangeExample = ({ date, setDate }) => {
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);
  useEffect(() => {
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnCLickOutside, true);
  }, []);

  const hideOnEscape = e => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const hideOnCLickOutside = e => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="container flex-wrap mb-1">
      <Label className="text-secondary" for="dateCustom">
        Tentukan lama sewa mobil (max. 7 hari)
      </Label>
      <Input
        id="dateCustom"
        value={`${format(date[0].startDate, 'yyyy/MM/dd')} to ${format(
          date[0].endDate,
          'yyyy/MM/dd',
        )}`}
        readOnly
        onClick={() => setOpen(open => !open)}
      />
      <div ref={refOne}>
        {open && (
          <div>
            <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              months={2}
              showDateDisplay={true}
              showSelectionPreview={true}
              minDate={addDays(new Date(), 0)}
              rangeColors={['#35B0A7']}
            />
            <Button
              className="btn btn-success justify-content-center align-self-center w-100"
              onClick={() => setOpen(open => !open)}
            >
              Pilih Tanggal
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateRangeExample;
