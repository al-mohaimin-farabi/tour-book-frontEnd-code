import React from "react";
import { NavLink } from "react-router-dom";

const BloodTest = () => {
  return (
    <div className="container">
      <h2 className="text-danger mt-3">
        Blood <span className="text-success">Tests</span>
      </h2>
      <div className="row">
        <div className="col-12 mt-4">
          <h3 className="text-secondary">CBC / Hemogram</h3>
          <p className="text-secondary">Price: 500TK</p>
          <p className="text-secondary">
            CBC stands for Complete Blood Count test. This test is also hugely
            necessary as it helps to measure the count of red blood cells, white
            blood cells, haemoglobin and Hematocrit in a human body. This test
            is basically run for overall health screening, which is necessary to
            detect any disease that can affect the blood cells. Diseases like
            Anemia, blood cancer etc can easily be detected through this test.
            Besides, the amount of blood loss after menstrual bleeding including
            certain types of infections that affect blood cells can also be
            detected through
          </p>
          <p className="text-secondary fw-bold">
            Sample Type: <span className="text-danger ">Blood</span>
          </p>
          <NavLink to="/booked" className="btn btn-success mb-4">
            Book It Now
          </NavLink>
        </div>
        <div className="col-12 mt-3">
          <h3 className="text-secondary">HbA1c</h3>
          <p className="text-secondary">Price: 400TK</p>
          <p className="text-secondary">
            <strong>HbA1c </strong>Test is used to quickly measure the amount of
            blood sugar that remains attached with Haemoglobin. Knowingly, the
            combination of Haemoglobin and glucose is known as HbA1c. Generally,
            this test is run to detect the possibilities of diabetes and
            prediabetes in adults. Everyone should go for this test for at least
            once in three months because the lifespan of red blood cells is
            usually 3 months. Your habit of smoking may affect your test results
            passively. Tests like Glycosylated HB Blood, Diabetes test, A1c
            Test, H1C test, A1c Haemoglobin test, Glycosylated HB are included
            in an <strong>HbA1c test</strong>. No hardcore preparations are
            needed to go for this test. You just need to follow the instructions
            given by your doctor before the test. If the value remains greater
            than 5.7 in your test results, then its normal
          </p>
          <p className="text-secondary fw-bold">
            Sample Type: <span className="text-danger ">Blood,</span>
            <br />
            <span className="text-danger ">
              Note: 10-12 hours fasting is required. Water is allowed.
            </span>
          </p>
          <NavLink to="/booked" className="btn btn-success mb-4">
            Book It Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BloodTest;
