import React from "react";
import "./invoice.css";
import { Button } from "../ui/button";
import { CarTaxiFront, ReceiptText } from "lucide-react";

const Invoice = () => {
  return (
    <div className="container my-10">
      <div className="invoice mt-10">
        <div className="flex justify-end">
          <Button className="ml-2 mx-10 mb-10">
            <ReceiptText className="mr-2 h-4 w-4" /> Print Invoice
          </Button>
        </div>
        <div className="px-10 py-5" id="order_invoice">
          <header className="clearfix">
            <div id="logo">
              <CarTaxiFront className="h-20 w-20" />
            </div>
            <div id="company">
              <h2 className="name">Go Rental</h2>
              <div>455 Foggy Heights, AZ 85004, US</div>
              <div>(602) 519-0450</div>
              <div>
                <a href="mailto:company@example.com">support@gorental.com</a>
              </div>
            </div>
          </header>
          <main>
            <div id="details" className="clearfix">
              <div id="client">
                <div className="to">INVOICE TO:</div>
                <h2 className="name">John Doe</h2>
                <h2 className="Phone">123-456-7890</h2>
                <div className="email">
                  <a href="mailto:john.doe@example.com">john.doe@example.com</a>
                </div>
                <div>PAID</div>
              </div>
              <div id="invoice">
                <h1>INVOICE #</h1>
                <p className="text-2xl mb-10">SampleID</p>
                <div className="date">Booking Date: 2023-01-01</div>
              </div>
            </div>
            <table style={{ border: "none", borderSpacing: "0", padding: "0" }}>
              <thead>
                <tr>
                  <th className="no">CAR DETAILS</th>
                  <th className="desc">CAR RENTAL DURATION</th>
                  <th className="unit">RENT PER DAY</th>
                  <th className="qty">DAYS OF RENT</th>
                  <th className="total">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="no">Toyota Camry</td>
                  <td className="desc">
                    <div>
                      <h3>Start Date:</h3>
                      2023-01-01
                    </div>
                    <div className="mt-5">
                      <h3>End Date:</h3>
                      2023-01-05
                    </div>
                  </td>
                  <td className="unit">$50</td>
                  <td className="qty">5</td>
                  <td className="total">$250</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}></td>
                  <td colSpan={2}>RENT</td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td colSpan={2}></td>
                  <td colSpan={2}>DISCOUNT</td>
                  <td>$20</td>
                </tr>
                <tr>
                  <td colSpan={2}></td>
                  <td colSpan={2}>TAX 15%</td>
                  <td>$34.50</td>
                </tr>
                <tr>
                  <td colSpan={2}></td>
                  <td colSpan={2}>GRAND TOTAL</td>
                  <td>$264.50</td>
                </tr>
              </tfoot>
            </table>
            <div id="notices">
              <div>Customer Additional Notes:</div>
              <div className="notice">No additional notes</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
