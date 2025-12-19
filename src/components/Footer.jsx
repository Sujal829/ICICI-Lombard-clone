import React from "react";
import "../assets/CSS/footer.css";
import data from "./footer.json";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Footer() {
  // console.log(data);
  // console.log(data.footer1);
  // console.log(data.footer1.Products);
  return (
    <div>
      <footer className="footer-content-wrpper">
        <div className="footer-wrapper il-home-container">
          <div className="footer-top-block">
            <h5>ICICI Lombard General Insurance Company Limited,</h5>
            <p>
              ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak
              Temple, Prabhadevi, Mumbai - 400025.
            </p>
            <div className="footer-info">
              <p className="with-border">Reg. No.115</p>
              <p className="email-para with-border">
                Email-customersupport@icicilombard.com
              </p>
              <p className="with-border">Fax no - 022 61961323</p>
              <p>Contact - 1800 2666 (Available 24 x 7)</p>
            </div>
          </div>
          <div className="footer-social-section">
            {/* Social Icons (Left Side) */}
            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/ICICILombard"
                  className="icon fb"
                  title="Facebook"
                  target="_blank"
                />
              </li>
              <li>
                <a
                  href="https://www.instagram.com/icicilombardofficial"
                  className="icon insta"
                  title="Instagram"
                  target="_blank"
                />
              </li>
              <li>
                <a
                  href="https://twitter.com/ICICILombard"
                  className="icon twitter"
                  title="Twitter"
                  target="_blank"
                />
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/ICICILombardLtd"
                  className="icon youtube"
                  title="YouTube"
                  target="_blank"
                />
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/icici-lombard?trk=tyah"
                  className="icon linkedin"
                  title="LinkedIn"
                  target="_blank"
                />
              </li>
            </ul>
            {/* Right Side Image (e.g., App Store or TakeCare App Badge) */}
            <div className="footer-right-image">
              <div className="app-links">
                <span className="app-label">IL TakeCare App</span>
                <div className="iconslogo">
                  <a >
                    <img
                      className="lazy loading"
                      alt="play store"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSIzOSIgcng9IjUuNSIgZmlsbD0iYmxhY2siLz4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxMTkiIGhlaWdodD0iMzkiIHJ4PSI1LjUiIHN0cm9rZT0iI0E2QTZBNiIvPgo8cGF0aCBkPSJNMTcuODA0OCAxOS40NjE3TDguMDg5NiAzMC4wMDU5QzguMDkwNTEgMzAuMDA3OCA4LjA5MDUxIDMwLjAxMDYgOC4wOTE0MiAzMC4wMTI1QzguMzg5ODEgMzEuMTU3NCA5LjQxMTc5IDMyIDEwLjYyNTQgMzJDMTEuMTEwOCAzMiAxMS41NjYyIDMxLjg2NTYgMTEuOTU2NyAzMS42MzA1TDExLjk4NzcgMzEuNjExOEwyMi45MjI5IDI1LjE1OTNMMTcuODA0OCAxOS40NjE3WiIgZmlsbD0iI0VBNDMzNSIvPgo8cGF0aCBkPSJNMjcuNjMzIDE3LjY2NjJMMjcuNjIzOSAxNy42NTk3TDIyLjkwMjcgMTQuODYxMkwxNy41ODM5IDE5LjcwMTNMMjIuOTIxOSAyNS4xNTgyTDI3LjYxNzUgMjIuMzg3OEMyOC40NDA2IDIxLjkzMjQgMjguOTk5OSAyMS4wNDUgMjguOTk5OSAyMC4wMjIzQzI4Ljk5OTkgMTkuMDA1MiAyOC40NDg4IDE4LjEyMjUgMjcuNjMzIDE3LjY2NjJaIiBmaWxsPSIjRkJCQzA0Ii8+CjxwYXRoIGQ9Ik04LjA4OTQyIDkuOTkzMzFDOC4wMzEwMiAxMC4yMTM1IDggMTAuNDQ0OSA4IDEwLjY4MzhWMjkuMzE2M0M4IDI5LjU1NTIgOC4wMzEwMiAyOS43ODY2IDguMDkwMzQgMzAuMDA1OUwxOC4xMzg2IDE5LjczMTNMOC4wODk0MiA5Ljk5MzMxWiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBkPSJNMTcuODc2NSAxOS45OTk5TDIyLjkwNDMgMTQuODU5NEwxMS45ODE5IDguMzgzNTFDMTEuNTg1IDguMTM5OTYgMTEuMTIxNCA4IDEwLjYyNTkgOEM5LjQxMjMzIDggOC4zODg1MyA4Ljg0NDQ3IDguMDkwMTUgOS45OTAzNEM4LjA5MDE1IDkuOTkxMjcgOC4wODkyMyA5Ljk5MjIgOC4wODkyMyA5Ljk5MzE0TDE3Ljg3NjUgMTkuOTk5OVoiIGZpbGw9IiMzNEE4NTMiLz4KPHBhdGggZD0iTTQzLjYxIDExLjcxQzQzLjYxIDEyLjcxIDQzLjMxMzMgMTMuNTA2NyA0Mi43MiAxNC4xQzQyLjA1MzMgMTQuODA2NyA0MS4xNzY3IDE1LjE2IDQwLjA5IDE1LjE2QzM5LjA1IDE1LjE2IDM4LjE3IDE0LjggMzcuNDUgMTQuMDhDMzYuNzMgMTMuMzYgMzYuMzcgMTIuNDczMyAzNi4zNyAxMS40MkMzNi4zNyAxMC4zNjY3IDM2LjczIDkuNDggMzcuNDUgOC43NkMzOC4xNyA4LjA0IDM5LjA1IDcuNjggNDAuMDkgNy42OEM0MC42MTY3IDcuNjggNDEuMTEzMyA3Ljc3MzMzIDQxLjU4IDcuOTZDNDIuMDQ2NyA4LjE0NjY3IDQyLjQzIDguNDEgNDIuNzMgOC43NUw0Mi4wNyA5LjQxQzQxLjg1IDkuMTQzMzMgNDEuNTYzMyA4LjkzNjY3IDQxLjIxIDguNzlDNDAuODYzMyA4LjYzNjY3IDQwLjQ5IDguNTYgNDAuMDkgOC41NkMzOS4zMSA4LjU2IDM4LjY1IDguODMgMzguMTEgOS4zN0MzNy41NzY3IDkuOTE2NjcgMzcuMzEgMTAuNiAzNy4zMSAxMS40MkMzNy4zMSAxMi4yNCAzNy41NzY3IDEyLjkyMzMgMzguMTEgMTMuNDdDMzguNjUgMTQuMDEgMzkuMzEgMTQuMjggNDAuMDkgMTQuMjhDNDAuODAzMyAxNC4yOCA0MS4zOTY3IDE0LjA4IDQxLjg3IDEzLjY4QzQyLjM0MzMgMTMuMjggNDIuNjE2NyAxMi43MyA0Mi42OSAxMi4wM0g0MC4wOVYxMS4xN0g0My41NkM0My41OTMzIDExLjM1NjcgNDMuNjEgMTEuNTM2NyA0My42MSAxMS43MVpNNDguOTA3OCA3Ljg0VjguNzJINDUuNjQ3OFYxMC45OUg0OC41ODc4VjExLjg1SDQ1LjY0NzhWMTQuMTJINDguOTA3OFYxNUg0NC43Mjc4VjcuODRINDguOTA3OFpNNTIuNTg3NyA4LjcyVjE1SDUxLjY2NzdWOC43Mkg0OS42Njc3VjcuODRINTQuNTg3N1Y4LjcySDUyLjU4NzdaTTU4LjY2NTQgMTVINTcuNzQ1NFY3Ljg0SDU4LjY2NTRWMTVaTTYyLjU0ODcgOC43MlYxNUg2MS42Mjg3VjguNzJINTkuNjI4N1Y3Ljg0SDY0LjU0ODdWOC43Mkg2Mi41NDg3Wk03NC41MjEgMTEuNDJDNzQuNTIxIDEyLjQ4IDc0LjE2NzcgMTMuMzY2NyA3My40NjEgMTQuMDhDNzIuNzQ3NyAxNC44IDcxLjg3NDMgMTUuMTYgNzAuODQxIDE1LjE2QzY5LjgwMSAxNS4xNiA2OC45Mjc3IDE0LjggNjguMjIxIDE0LjA4QzY3LjUxNDMgMTMuMzY2NyA2Ny4xNjEgMTIuNDggNjcuMTYxIDExLjQyQzY3LjE2MSAxMC4zNiA2Ny41MTQzIDkuNDczMzMgNjguMjIxIDguNzZDNjguOTI3NyA4LjA0IDY5LjgwMSA3LjY4IDcwLjg0MSA3LjY4QzcxLjg4MSA3LjY4IDcyLjc1NDMgOC4wNDMzMyA3My40NjEgOC43N0M3NC4xNjc3IDkuNDgzMzMgNzQuNTIxIDEwLjM2NjcgNzQuNTIxIDExLjQyWk02OC4xMDEgMTEuNDJDNjguMTAxIDEyLjI0NjcgNjguMzYxIDEyLjkzIDY4Ljg4MSAxMy40N0M2OS40MDc3IDE0LjAxIDcwLjA2MSAxNC4yOCA3MC44NDEgMTQuMjhDNzEuNjIxIDE0LjI4IDcyLjI3MSAxNC4wMSA3Mi43OTEgMTMuNDdDNzMuMzE3NyAxMi45MzY3IDczLjU4MSAxMi4yNTMzIDczLjU4MSAxMS40MkM3My41ODEgMTAuNTg2NyA3My4zMTc3IDkuOTAzMzMgNzIuNzkxIDkuMzdDNzIuMjcxIDguODMgNzEuNjIxIDguNTYgNzAuODQxIDguNTZDNzAuMDYxIDguNTYgNjkuNDA3NyA4LjgzIDY4Ljg4MSA5LjM3QzY4LjM2MSA5LjkxIDY4LjEwMSAxMC41OTMzIDY4LjEwMSAxMS40MlpNNzYuNTI2NyAxNUg3NS42MDY3VjcuODRINzYuNzI2N0w4MC4yMDY3IDEzLjQxSDgwLjI0NjdMODAuMjA2NyAxMi4wM1Y3Ljg0SDgxLjEyNjdWMTVIODAuMTY2N0w3Ni41MjY3IDkuMTZINzYuNDg2N0w3Ni41MjY3IDEwLjU0VjE1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTkzLjUxODEgMzEuNDA5N0g5NS4xNDY5VjIwLjM5ODFIOTMuNTE4MVYzMS40MDk3Wk0xMDguMTg5IDI0LjM2NDZMMTA2LjMyMiAyOS4xMzg4SDEwNi4yNjZMMTA0LjMyOCAyNC4zNjQ2SDEwMi41NzNMMTA1LjQ3OSAzMS4wMzcxTDEwMy44MjMgMzQuNzQ5SDEwNS41MjFMMTEwIDI0LjM2NDZIMTA4LjE4OVpNOTguOTUxOSAzMC4xNTg4Qzk4LjQxNzYgMzAuMTU4OCA5Ny42NzM5IDI5Ljg5MDIgOTcuNjczOSAyOS4yMjM0Qzk3LjY3MzkgMjguMzc0MiA5OC42MDAxIDI4LjA0ODMgOTkuNDAwNSAyOC4wNDgzQzEwMC4xMTYgMjguMDQ4MyAxMDAuNDU0IDI4LjIwNDIgMTAwLjg4OSAyOC40MTY1QzEwMC43NjIgMjkuNDM2NSA5OS44OTIgMzAuMTU4OCA5OC45NTE5IDMwLjE1ODhaTTk5LjE0ODMgMjQuMTI0MUM5Ny45NjkgMjQuMTI0MSA5Ni43NDY5IDI0LjY0ODIgOTYuMjQyNCAyNS44MTAxTDk3LjY4NzkgMjYuNDE4OEM5Ny45OTY5IDI1LjgxMDEgOTguNTcyMSAyNS42MTEgOTkuMTc2MiAyNS42MTFDMTAwLjAxOSAyNS42MTEgMTAwLjg3NSAyNi4xMjEgMTAwLjg4OSAyNy4wMjgzVjI3LjE0MTFDMTAwLjU5NCAyNi45NzEgOTkuOTYyNyAyNi43MTY1IDk5LjE5MDIgMjYuNzE2NUM5Ny42MzIgMjYuNzE2NSA5Ni4wNDUxIDI3LjU4MDYgOTYuMDQ1MSAyOS4xOTUyQzk2LjA0NTEgMzAuNjY4OSA5Ny4zMjMgMzEuNjE4NCA5OC43NTQ2IDMxLjYxODRDOTkuODUwMSAzMS42MTg0IDEwMC40NTQgMzEuMTIyNSAxMDAuODMzIDMwLjU0MTFIMTAwLjg4OVYzMS4zOTEySDEwMi40NjFWMjcuMTY5MkMxMDIuNDYxIDI1LjIxNDYgMTAxLjAxNSAyNC4xMjQxIDk5LjE0ODMgMjQuMTI0MVpNODkuMDgyMSAyNS43MDUzSDg2Ljc2NTVWMjEuOTMwOEg4OS4wODIxQzkwLjI5OTggMjEuOTMwOCA5MC45OTExIDIyLjk0ODIgOTAuOTkxMSAyMy44MTc2QzkwLjk5MTEgMjQuNjcxMSA5MC4yOTk4IDI1LjcwNTMgODkuMDgyMSAyNS43MDUzWk04OS4wNDAyIDIwLjM5ODFIODUuMTM3NVYzMS40MDk3SDg2Ljc2NTVWMjcuMjM3OUg4OS4wNDAyQzkwLjg0NTMgMjcuMjM3OSA5Mi42MTk5IDI1LjkxODQgOTIuNjE5OSAyMy44MTc2QzkyLjYxOTkgMjEuNzE2OCA5MC44NDUzIDIwLjM5ODEgODkuMDQwMiAyMC4zOTgxWk02Ny43NTgzIDMwLjE2MDZDNjYuNjMzMiAzMC4xNjA2IDY1LjY5MTMgMjkuMjEwMiA2NS42OTEzIDI3LjkwNDdDNjUuNjkxMyAyNi41ODUyIDY2LjYzMzIgMjUuNjE5OCA2Ny43NTgzIDI1LjYxOThDNjguODY5NSAyNS42MTk4IDY5Ljc0MDYgMjYuNTg1MiA2OS43NDA2IDI3LjkwNDdDNjkuNzQwNiAyOS4yMTAyIDY4Ljg2OTUgMzAuMTYwNiA2Ny43NTgzIDMwLjE2MDZaTTY5LjYyODkgMjQuOTgxMkg2OS41NzIyQzY5LjIwNjQgMjQuNTQxNyA2OC41MDM4IDI0LjE0NDQgNjcuNjE3OCAyNC4xNDQ0QzY1Ljc2MTEgMjQuMTQ0NCA2NC4wNTk5IDI1Ljc4OTggNjQuMDU5OSAyNy45MDQ3QzY0LjA1OTkgMzAuMDA0NyA2NS43NjExIDMxLjYzNjkgNjcuNjE3OCAzMS42MzY5QzY4LjUwMzggMzEuNjM2OSA2OS4yMDY0IDMxLjIzOTYgNjkuNTcyMiAzMC43ODUxSDY5LjYyODlWMzEuMzI1MUM2OS42Mjg5IDMyLjc1ODIgNjguODY5NSAzMy41MjQ2IDY3LjY0NTcgMzMuNTI0NkM2Ni42NDcxIDMzLjUyNDYgNjYuMDI4MiAzMi44MDA1IDY1Ljc3NTEgMzIuMTkwMUw2NC4zNTQ5IDMyLjc4NjRDNjQuNzYyNiAzMy43OCA2NS44NDU4IDM1IDY3LjY0NTcgMzVDNjkuNTU4MiAzNSA3MS4xNzU3IDMzLjg2NDYgNzEuMTc1NyAzMS4wOTc4VjI0LjM3MDhINjkuNjI4OVYyNC45ODEyWk03Mi4zMDA4IDMxLjQwOTdINzMuOTMyM1YyMC4zOTczSDcyLjMwMDhWMzEuNDA5N1pNNzYuMzM2MiAyNy43NzdDNzYuMjk0MyAyNi4zMjk4IDc3LjQ0NzQgMjUuNTkxNiA3OC4yNzY2IDI1LjU5MTZDNzguOTI0MyAyNS41OTE2IDc5LjQ3MjUgMjUuOTE3NiA3OS42NTQ5IDI2LjM4NjJMNzYuMzM2MiAyNy43NzdaTTgxLjM5ODkgMjYuNTI4QzgxLjA4OTkgMjUuNjkxMiA4MC4xNDcyIDI0LjE0NDQgNzguMjIwOCAyNC4xNDQ0Qzc2LjMwODMgMjQuMTQ0NCA3NC43MTk2IDI1LjY2MjEgNzQuNzE5NiAyNy44OTA3Qzc0LjcxOTYgMjkuOTkwNiA3Ni4yOTQzIDMxLjYzNjkgNzguNDAzMiAzMS42MzY5QzgwLjEwNTMgMzEuNjM2OSA4MS4wODk5IDMwLjU4NjkgODEuNDk3NiAyOS45NzY1TDgwLjIzMTkgMjkuMTI0N0M3OS44MTAzIDI5Ljc0OTMgNzkuMjMzMyAzMC4xNjA2IDc4LjQwMzIgMzAuMTYwNkM3Ny41NzM5IDMwLjE2MDYgNzYuOTgzIDI5Ljc3NzQgNzYuNjAzMyAyOS4wMjYxTDgxLjU2NzQgMjYuOTUzNEw4MS4zOTg5IDI2LjUyOFpNNDEuODUwMSAyNS4yOTM5VjI2Ljg4M0g0NS42MTg0QzQ1LjUwNTggMjcuNzc3IDQ1LjIxMDcgMjguNDI5NyA0NC43NjEyIDI4Ljg4MzRDNDQuMjEyMSAyOS40Mzc0IDQzLjM1NDEgMzAuMDQ3OSA0MS44NTAxIDMwLjA0NzlDMzkuNTI5MSAzMC4wNDc5IDM3LjcxNTIgMjguMTYwMiAzNy43MTUyIDI1LjgxODlDMzcuNzE1MiAyMy40NzY3IDM5LjUyOTEgMjEuNTg5OSA0MS44NTAxIDIxLjU4OTlDNDMuMTAxOCAyMS41ODk5IDQ0LjAxNTcgMjIuMDg2NyA0NC42OTA1IDIyLjcyNTRMNDUuODAxNyAyMS42MDRDNDQuODU4OSAyMC42OTU5IDQzLjYwODEgMjAgNDEuODUwMSAyMEMzOC42NzE5IDIwIDM2IDIyLjYxMTcgMzYgMjUuODE4OUMzNiAyOS4wMjYxIDM4LjY3MTkgMzEuNjM2OSA0MS44NTAxIDMxLjYzNjlDNDMuNTY1MyAzMS42MzY5IDQ0Ljg1ODkgMzEuMDY4OCA0NS44NzE1IDMwLjAwNDdDNDYuOTEyOSAyOC45NTQ3IDQ3LjIzNTggMjcuNDc5MyA0Ny4yMzU4IDI2LjI4NjZDNDcuMjM1OCAyNS45MTc2IDQ3LjIwNzkgMjUuNTc3NSA0Ny4xNTEyIDI1LjI5MzlINDEuODUwMVpNNTEuNTIwOCAzMC4xNjA2QzUwLjM5NTcgMzAuMTYwNiA0OS40MjUgMjkuMjI0MyA0OS40MjUgMjcuODkwN0M0OS40MjUgMjYuNTQyMSA1MC4zOTU3IDI1LjYxOTggNTEuNTIwOCAyNS42MTk4QzUyLjY0NTEgMjUuNjE5OCA1My42MTU4IDI2LjU0MjEgNTMuNjE1OCAyNy44OTA3QzUzLjYxNTggMjkuMjI0MyA1Mi42NDUxIDMwLjE2MDYgNTEuNTIwOCAzMC4xNjA2Wk01MS41MjA4IDI0LjE0NDRDNDkuNDY2OSAyNC4xNDQ0IDQ3Ljc5MzYgMjUuNzE5NCA0Ny43OTM2IDI3Ljg5MDdDNDcuNzkzNiAzMC4wNDc5IDQ5LjQ2NjkgMzEuNjM2OSA1MS41MjA4IDMxLjYzNjlDNTMuNTczOSAzMS42MzY5IDU1LjI0NzIgMzAuMDQ3OSA1NS4yNDcyIDI3Ljg5MDdDNTUuMjQ3MiAyNS43MTk0IDUzLjU3MzkgMjQuMTQ0NCA1MS41MjA4IDI0LjE0NDRaTTU5LjY1IDMwLjE2MDZDNTguNTI0OSAzMC4xNjA2IDU3LjU1NDIgMjkuMjI0MyA1Ny41NTQyIDI3Ljg5MDdDNTcuNTU0MiAyNi41NDIxIDU4LjUyNDkgMjUuNjE5OCA1OS42NSAyNS42MTk4QzYwLjc3NTIgMjUuNjE5OCA2MS43NDUgMjYuNTQyMSA2MS43NDUgMjcuODkwN0M2MS43NDUgMjkuMjI0MyA2MC43NzUyIDMwLjE2MDYgNTkuNjUgMzAuMTYwNlpNNTkuNjUgMjQuMTQ0NEM1Ny41OTcgMjQuMTQ0NCA1NS45MjM3IDI1LjcxOTQgNTUuOTIzNyAyNy44OTA3QzU1LjkyMzcgMzAuMDQ3OSA1Ny41OTcgMzEuNjM2OSA1OS42NSAzMS42MzY5QzYxLjcwMzEgMzEuNjM2OSA2My4zNzY0IDMwLjA0NzkgNjMuMzc2NCAyNy44OTA3QzYzLjM3NjQgMjUuNzE5NCA2MS43MDMxIDI0LjE0NDQgNTkuNjUgMjQuMTQ0NFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                      data-ll-status="loading"
                    />
                  </a>
                  <a >
                    <img
                      className="lazy loading"
                      alt="app store"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSIzOSIgcng9IjUuNSIgZmlsbD0iYmxhY2siLz4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxMTkiIGhlaWdodD0iMzkiIHJ4PSI1LjUiIHN0cm9rZT0iI0E2QTZBNiIvPgo8cGF0aCBkPSJNMjQuNzA0NSAyMC43NjMxQzI0LjcxNjYgMTkuODQzMiAyNC45NjY5IDE4Ljk0MTMgMjUuNDMyMSAxOC4xNDEyQzI1Ljg5NzIgMTcuMzQxMSAyNi41NjIxIDE2LjY2ODggMjcuMzY0OCAxNi4xODdDMjYuODU0OCAxNS40NzYgMjYuMTgyMSAxNC44OTA4IDI1LjQgMTQuNDc4QzI0LjYxNzggMTQuMDY1MiAyMy43NDc5IDEzLjgzNjEgMjIuODU5MiAxMy44MDlDMjAuOTYzNSAxMy42MTQ3IDE5LjEyNTggMTQuOTE2NCAxOC4xNTk4IDE0LjkxNjRDMTcuMTc1MSAxNC45MTY0IDE1LjY4NzggMTMuODI4MyAxNC4wODYyIDEzLjg2MDRDMTMuMDUwMiAxMy44OTMxIDEyLjA0MDYgMTQuMTg3MiAxMS4xNTU3IDE0LjcxNDFDMTAuMjcwOCAxNS4yNDEgOS41NDA3NSAxNS45ODI3IDkuMDM2NzQgMTYuODY2OUM2Ljg1MzUyIDIwLjU1NzMgOC40ODIwMSAyNS45ODA5IDEwLjU3MzQgMjguOTY0QzExLjYxOTcgMzAuNDI0NyAxMi44NDI2IDMyLjA1NjQgMTQuNDQyOCAzMS45OTg1QzE2LjAwODYgMzEuOTM1MSAxNi41OTM0IDMxLjAyMzcgMTguNDgzNSAzMS4wMjM3QzIwLjM1NjEgMzEuMDIzNyAyMC45MDQ4IDMxLjk5ODUgMjIuNTM3NCAzMS45NjE3QzI0LjIxNzYgMzEuOTM1MSAyNS4yNzYyIDMwLjQ5NDUgMjYuMjg1OSAyOS4wMkMyNy4wMzc3IDI3Ljk3OTIgMjcuNjE2MiAyNi44Mjg4IDI4IDI1LjYxMTZDMjcuMDIzOCAyNS4yMDg1IDI2LjE5MDggMjQuNTMzOCAyNS42MDQ4IDIzLjY3MTZDMjUuMDE4NyAyMi44MDk0IDI0LjcwNTYgMjEuNzk3OSAyNC43MDQ1IDIwLjc2MzFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjEuNjIwOCAxMS44NDcxQzIyLjUzNjkgMTAuNzczNCAyMi45ODgzIDkuMzkzMzUgMjIuODc5IDhDMjEuNDc5MyA4LjE0MzUyIDIwLjE4NjUgOC43OTY2IDE5LjI1OCA5LjgyOTExQzE4LjgwNCAxMC4zMzM1IDE4LjQ1NjMgMTAuOTIwMyAxOC4yMzQ4IDExLjU1NkMxOC4wMTMyIDEyLjE5MTcgMTcuOTIyMiAxMi44NjM4IDE3Ljk2NjkgMTMuNTMzOEMxOC42NjY5IDEzLjU0MDggMTkuMzU5NSAxMy4zOTI3IDE5Ljk5MjQgMTMuMTAwNUMyMC42MjUzIDEyLjgwODQgMjEuMTgyMSAxMi4zNzk4IDIxLjYyMDggMTEuODQ3MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zNi43OTEgOC41MDE0NkgzOC44NjA4QzQwLjY0OTQgOC41MDE0NiA0MS41MTk1IDkuNTY0OTQgNDEuNTE5NSAxMS40OTQxQzQxLjUxOTUgMTMuNDIzMyA0MC42NDA2IDE0LjUgMzguODYwOCAxNC41SDM2Ljc5MVY4LjUwMTQ2Wk0zNy43ODg2IDkuMzQwODJWMTMuNjYwNkgzOC43NTFDMzkuOTM3NSAxMy42NjA2IDQwLjQ5NTYgMTIuOTQ0MyA0MC40OTU2IDExLjUwNzNDNDAuNDk1NiAxMC4wNjE1IDM5LjkzMzEgOS4zNDA4MiAzOC43NTEgOS4zNDA4MkgzNy43ODg2Wk00NC42NzQ4IDkuNzc1ODhDNDUuODg3NyA5Ljc3NTg4IDQ2LjczNTggMTAuNTYyNSA0Ni43MzU4IDExLjg2NzdWMTIuNDY5N0M0Ni43MzU4IDEzLjgxODggNDUuODg3NyAxNC41NzkxIDQ0LjY3NDggMTQuNTc5MUM0My40NDQzIDE0LjU3OTEgNDIuNjA1IDEzLjgyNzYgNDIuNjA1IDEyLjQ3NDFWMTEuODcyMUM0Mi42MDUgMTAuNjAyMSA0My40NTc1IDkuNzc1ODggNDQuNjc0OCA5Ljc3NTg4Wk00NC42NzkyIDEwLjU2MjVDNDMuOTg0OSAxMC41NjI1IDQzLjU4OTQgMTEuMTQyNiA0My41ODk0IDExLjkyMDRWMTIuNDM5QzQzLjU4OTQgMTMuMjE2OCA0My45NTg1IDEzLjc5MjUgNDQuNjc5MiAxMy43OTI1QzQ1LjM5MTEgMTMuNzkyNSA0NS43NTU5IDEzLjIyMTIgNDUuNzU1OSAxMi40MzlWMTEuOTIwNEM0NS43NTU5IDExLjE0MjYgNDUuMzczNSAxMC41NjI1IDQ0LjY3OTIgMTAuNTYyNVpNNTMuODk4OSA5Ljg1NDk4TDUyLjY3NzIgMTQuNUg1MS42ODQxTDUwLjcxMjkgMTEuMDcyM0g1MC42ODY1TDQ5LjczMjkgMTQuNUg0OC43MzU0TDQ3LjQ2MDkgOS44NTQ5OEg0OC41MTEyTDQ5LjI1ODMgMTMuMzk3SDQ5LjMwMjJMNTAuMjM4MyA5Ljg1NDk4SDUxLjE1NjdMNTIuMTE5MSAxMy4zOTdINTIuMTYzMUw1Mi45MjMzIDkuODU0OThINTMuODk4OVpNNTQuODY1NyAxNC41VjkuODU0OThINTUuODIzN1YxMC42ODk5SDU1Ljg3MjFDNTUuOTkwNyAxMC4zMjUyIDU2LjMyOTEgOS43ODQ2NyA1Ny4yNjk1IDkuNzg0NjdDNTguMjA1NiA5Ljc4NDY3IDU4LjgzNCAxMC4zMDMyIDU4LjgzNCAxMS4zNjIzVjE0LjVINTcuODU4NFYxMS42NDc5QzU3Ljg1ODQgMTAuOTQwNCA1Ny40ODkzIDEwLjYxNTIgNTYuOTM5OSAxMC42MTUyQzU2LjIxOTIgMTAuNjE1MiA1NS44NDEzIDExLjE2ODkgNTUuODQxMyAxMS45MjA0VjE0LjVINTQuODY1N1pNNjAuMzEwNSAxNC41VjguMTg1MDZINjEuMjg2MVYxNC41SDYwLjMxMDVaTTY0LjYzNDggOS43NzU4OEM2NS44NDc3IDkuNzc1ODggNjYuNjk1OCAxMC41NjI1IDY2LjY5NTggMTEuODY3N1YxMi40Njk3QzY2LjY5NTggMTMuODE4OCA2NS44NDc3IDE0LjU3OTEgNjQuNjM0OCAxNC41NzkxQzYzLjQwNDMgMTQuNTc5MSA2Mi41NjQ5IDEzLjgyNzYgNjIuNTY0OSAxMi40NzQxVjExLjg3MjFDNjIuNTY0OSAxMC42MDIxIDYzLjQxNzUgOS43NzU4OCA2NC42MzQ4IDkuNzc1ODhaTTY0LjYzOTIgMTAuNTYyNUM2My45NDQ4IDEwLjU2MjUgNjMuNTQ5MyAxMS4xNDI2IDYzLjU0OTMgMTEuOTIwNFYxMi40MzlDNjMuNTQ5MyAxMy4yMTY4IDYzLjkxODUgMTMuNzkyNSA2NC42MzkyIDEzLjc5MjVDNjUuMzUxMSAxMy43OTI1IDY1LjcxNTggMTMuMjIxMiA2NS43MTU4IDEyLjQzOVYxMS45MjA0QzY1LjcxNTggMTEuMTQyNiA2NS4zMzM1IDEwLjU2MjUgNjQuNjM5MiAxMC41NjI1Wk02OS4yMjI3IDE0LjU3MDNDNjguMzIxOCAxNC41NzAzIDY3LjcwMjEgMTQuMDE2NiA2Ny43MDIxIDEzLjE1MDlDNjcuNzAyMSAxMi4zMjkxIDY4LjI3MzQgMTEuNzc1NCA2OS4zNDU3IDExLjc3NTRINzAuNTE5VjExLjM0MDNDNzAuNTE5IDEwLjgwODYgNzAuMTgwNyAxMC41NTgxIDY5LjY0NDUgMTAuNTU4MUM2OS4xMTcyIDEwLjU1ODEgNjguODc5OSAxMC43Nzc4IDY4LjgwNTIgMTEuMDg1NEg2Ny44Nzc5QzY3LjkzNTEgMTAuMzA3NiA2OC41MTk1IDkuNzg0NjcgNjkuNjc1MyA5Ljc4NDY3QzcwLjY2ODUgOS43ODQ2NyA3MS40OTAyIDEwLjE5NzggNzEuNDkwMiAxMS4zNTM1VjE0LjVINzAuNTYzVjEzLjg5NzlINzAuNTE5QzcwLjMxMjUgMTQuMjUzOSA2OS45MDgyIDE0LjU3MDMgNjkuMjIyNyAxNC41NzAzWk02OS41MjU5IDEzLjgxNDVDNzAuMDc5NiAxMy44MTQ1IDcwLjUxOSAxMy40MzY1IDcwLjUxOSAxMi45MzEyVjEyLjQzMDJINjkuNDk5NUM2OC45MzI2IDEyLjQzMDIgNjguNjgyMSAxMi43MTU4IDY4LjY4MjEgMTMuMTAyNUM2OC42ODIxIDEzLjU4NTkgNjkuMDg2NCAxMy44MTQ1IDY5LjUyNTkgMTMuODE0NVpNNzQuNDk2MSA5Ljc5MzQ2Qzc1LjE1MDkgOS43OTM0NiA3NS42NTE5IDEwLjA4MzUgNzUuODMyIDEwLjU1MzdINzUuODgwNFY4LjE4NTA2SDc2Ljg1NlYxNC41SDc1LjkwNjdWMTMuNzU3M0g3NS44NTg0Qzc1LjcxNzggMTQuMjI3NSA3NS4xNTk3IDE0LjU2MTUgNzQuNDgyOSAxNC41NjE1QzczLjQxNSAxNC41NjE1IDcyLjcyMDcgMTMuODAxMyA3Mi43MjA3IDEyLjU3NTJWMTEuNzc5OEM3Mi43MjA3IDEwLjU1MzcgNzMuNDI4MiA5Ljc5MzQ2IDc0LjQ5NjEgOS43OTM0NlpNNzQuNzY4NiAxMC41OTMzQzc0LjExODIgMTAuNTkzMyA3My43MTM5IDExLjA3NjcgNzMuNzEzOSAxMS45MjA0VjEyLjQzMDJDNzMuNzEzOSAxMy4yNzgzIDc0LjEyMjYgMTMuNzYxNyA3NC43OTA1IDEzLjc2MTdDNzUuNDQ5NyAxMy43NjE3IDc1Ljg4MDQgMTMuMjgyNyA3NS44ODA0IDEyLjQ5MTdWMTEuNzg4NkM3NS44ODA0IDExLjA3MjMgNzUuNDEwMiAxMC41OTMzIDc0Ljc2ODYgMTAuNTkzM1pNODIuMjEyOSA5Ljc3NTg4QzgzLjQyNTggOS43NzU4OCA4NC4yNzM5IDEwLjU2MjUgODQuMjczOSAxMS44Njc3VjEyLjQ2OTdDODQuMjczOSAxMy44MTg4IDgzLjQyNTggMTQuNTc5MSA4Mi4yMTI5IDE0LjU3OTFDODAuOTgyNCAxNC41NzkxIDgwLjE0MzEgMTMuODI3NiA4MC4xNDMxIDEyLjQ3NDFWMTEuODcyMUM4MC4xNDMxIDEwLjYwMjEgODAuOTk1NiA5Ljc3NTg4IDgyLjIxMjkgOS43NzU4OFpNODIuMjE3MyAxMC41NjI1QzgxLjUyMjkgMTAuNTYyNSA4MS4xMjc0IDExLjE0MjYgODEuMTI3NCAxMS45MjA0VjEyLjQzOUM4MS4xMjc0IDEzLjIxNjggODEuNDk2NiAxMy43OTI1IDgyLjIxNzMgMTMuNzkyNUM4Mi45MjkyIDEzLjc5MjUgODMuMjkzOSAxMy4yMjEyIDgzLjI5MzkgMTIuNDM5VjExLjkyMDRDODMuMjkzOSAxMS4xNDI2IDgyLjkxMTYgMTAuNTYyNSA4Mi4yMTczIDEwLjU2MjVaTTg1LjUzMDggMTQuNVY5Ljg1NDk4SDg2LjQ4ODhWMTAuNjg5OUg4Ni41MzcxQzg2LjY1NTggMTAuMzI1MiA4Ni45OTQxIDkuNzg0NjcgODcuOTM0NiA5Ljc4NDY3Qzg4Ljg3MDYgOS43ODQ2NyA4OS40OTkgMTAuMzAzMiA4OS40OTkgMTEuMzYyM1YxNC41SDg4LjUyMzRWMTEuNjQ3OUM4OC41MjM0IDEwLjk0MDQgODguMTU0MyAxMC42MTUyIDg3LjYwNSAxMC42MTUyQzg2Ljg4NDMgMTAuNjE1MiA4Ni41MDYzIDExLjE2ODkgODYuNTA2MyAxMS45MjA0VjE0LjVIODUuNTMwOFpNOTMuMjczOSA5Ljg4NTc0VjguNzI1NTlIOTQuMjI3NVY5Ljg4NTc0SDk1LjI2OVYxMC42NTA0SDk0LjIyNzVWMTMuMTE1N0M5NC4yMjc1IDEzLjYyMTEgOTQuNDE2NSAxMy43NjE3IDk0LjkzOTUgMTMuNzYxN0M5NS4wNzEzIDEzLjc2MTcgOTUuMjQ3MSAxMy43NTI5IDk1LjMyMTggMTMuNzQ0MVYxNC40OTEyQzk1LjI0MjcgMTQuNTA0NCA5NC45MTc1IDE0LjUzMDggOTQuNjk3OCAxNC41MzA4QzkzLjU2ODQgMTQuNTMwOCA5My4yNjA3IDE0LjEyNjUgOTMuMjYwNyAxMy4xOTQ4VjEwLjY1MDRIOTIuNTUzMlY5Ljg4NTc0SDkzLjI3MzlaTTk2LjQ5OTUgMTQuNVY4LjE4NTA2SDk3LjQ3MDdWMTAuNjg5OUg5Ny41MTlDOTcuNjIwMSAxMC4zNjA0IDk3Ljk5OCA5Ljc4NDY3IDk4LjkyOTcgOS43ODQ2N0M5OS44MzUgOS43ODQ2NyAxMDAuNDgxIDEwLjMwNzYgMTAwLjQ4MSAxMS4zNjY3VjE0LjVIOTkuNTA5OFYxMS42NTIzQzk5LjUwOTggMTAuOTQ0OCA5OS4xMTg3IDEwLjYxNTIgOTguNTY0OSAxMC42MTUyQzk3Ljg2NjIgMTAuNjE1MiA5Ny40NzA3IDExLjE2NDYgOTcuNDcwNyAxMS45MjA0VjE0LjVIOTYuNDk5NVpNMTAzLjc1NSAxNC41NzkxQzEwMi40ODkgMTQuNTc5MSAxMDEuNzAzIDEzLjgwMTMgMTAxLjcwMyAxMi40OTE3VjExLjg2MzNDMTAxLjcwMyAxMC41NDQ5IDEwMi41NjQgOS43NzU4OCAxMDMuNjk4IDkuNzc1ODhDMTA0Ljg2MiA5Ljc3NTg4IDEwNS42ODQgMTAuNTg0NSAxMDUuNjg0IDExLjg2MzNWMTIuNDA4MkgxMDIuNjY5VjEyLjYzNjdDMTAyLjY2OSAxMy4zMDQ3IDEwMy4wNjUgMTMuNzk2OSAxMDMuNzUgMTMuNzk2OUMxMDQuMjYgMTMuNzk2OSAxMDQuNjEyIDEzLjU1NTIgMTA0LjY3OCAxMy4yNjUxSDEwNS42MzFDMTA1LjU3NCAxMy44MDEzIDEwNS4wMDcgMTQuNTc5MSAxMDMuNzU1IDE0LjU3OTFaTTEwMi42NjkgMTEuNzcxSDEwNC43M1YxMS43MDk1QzEwNC43MyAxMS4wMTA3IDEwNC4zMjIgMTAuNTQ0OSAxMDMuNzAyIDEwLjU0NDlDMTAzLjA4MyAxMC41NDQ5IDEwMi42NjkgMTEuMDEwNyAxMDIuNjY5IDExLjcwOTVWMTEuNzcxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM4LjIwNjEgMzAuNUgzNi4xNzU4TDQwLjMwNjYgMTguNTAyOUg0Mi41MzkxTDQ2LjY2MTEgMzAuNUg0NC41NTE4TDQzLjQ4ODMgMjcuMTc3N0gzOS4yNzgzTDM4LjIwNjEgMzAuNVpNNDEuNDMxNiAyMC41NzcxSDQxLjM1MjVMMzkuNzI2NiAyNS42NDg0SDQzLjA0TDQxLjQzMTYgMjAuNTc3MVpNNTIuMjY0NCAzMC42MzE4QzUxLjA2MDMgMzAuNjMxOCA1MC4xNDYyIDMwLjA2MDUgNDkuNjU0IDI5LjIwOEg0OS41ODM3VjMzLjU4NUg0Ny42MzI1VjIxLjIxSDQ5LjUzMVYyMi41NzIzSDQ5LjYwMTNDNTAuMTExMSAyMS42ODQ2IDUxLjA2MDMgMjEuMDg2OSA1Mi4zMDgzIDIxLjA4NjlDNTQuMzkxMyAyMS4wODY5IDU1Ljg3NjcgMjIuNjYwMiA1NS44NzY3IDI1LjQzNzVWMjYuMjYzN0M1NS44NzY3IDI5LjAyMzQgNTQuNDA4OSAzMC42MzE4IDUyLjI2NDQgMzAuNjMxOFpNNTEuODE2MSAyOS4wMjM0QzUzLjA1NTQgMjkuMDIzNCA1My44OTkxIDI4LjAzMDMgNTMuODk5MSAyNi4xNTgyVjI1LjUwNzhDNTMuODk5MSAyMy43MDYxIDUzLjEwODEgMjIuNjc3NyA1MS43ODEgMjIuNjc3N0M1MC40MTg3IDIyLjY3NzcgNDkuNTY2MSAyMy43ODUyIDQ5LjU2NjEgMjUuNDk5VjI2LjE1ODJDNDkuNTY2MSAyNy45MTYgNTAuNDI3NSAyOS4wMjM0IDUxLjgxNjEgMjkuMDIzNFpNNjIuMTgzIDMwLjYzMThDNjAuOTc4OSAzMC42MzE4IDYwLjA2NDkgMzAuMDYwNSA1OS41NzI3IDI5LjIwOEg1OS41MDI0VjMzLjU4NUg1Ny41NTEyVjIxLjIxSDU5LjQ0OTZWMjIuNTcyM0g1OS41MkM2MC4wMjk3IDIxLjY4NDYgNjAuOTc4OSAyMS4wODY5IDYyLjIyNyAyMS4wODY5QzY0LjMxIDIxLjA4NjkgNjUuNzk1NCAyMi42NjAyIDY1Ljc5NTQgMjUuNDM3NVYyNi4yNjM3QzY1Ljc5NTQgMjkuMDIzNCA2NC4zMjc2IDMwLjYzMTggNjIuMTgzIDMwLjYzMThaTTYxLjczNDggMjkuMDIzNEM2Mi45NzQxIDI5LjAyMzQgNjMuODE3OCAyOC4wMzAzIDYzLjgxNzggMjYuMTU4MlYyNS41MDc4QzYzLjgxNzggMjMuNzA2MSA2My4wMjY4IDIyLjY3NzcgNjEuNjk5NiAyMi42Nzc3QzYwLjMzNzMgMjIuNjc3NyA1OS40ODQ4IDIzLjc4NTIgNTkuNDg0OCAyNS40OTlWMjYuMTU4MkM1OS40ODQ4IDI3LjkxNiA2MC4zNDYxIDI5LjAyMzQgNjEuNzM0OCAyOS4wMjM0Wk02OS44Mzg3IDI3LjE2ODlINzEuNzg5OUM3MS44Nzc4IDI4LjIwNjEgNzIuNzkxOSAyOS4wOTM4IDc0LjQ4ODIgMjkuMDkzOEM3Ni4wNDM4IDI5LjA5MzggNzYuOTY2NyAyOC4zNjQzIDc2Ljk2NjcgMjcuMjMwNUM3Ni45NjY3IDI2LjMxNjQgNzYuMzUxNCAyNS44MjQyIDc1LjA2ODIgMjUuNTE2Nkw3My4wOTk1IDI1LjAyNDRDNzEuNTUyNiAyNC42NjQxIDcwLjE2MzkgMjMuNzQxMiA3MC4xNjM5IDIxLjc5QzcwLjE2MzkgMTkuNDk2MSA3Mi4xNjc5IDE4LjIzOTMgNzQuNDk3IDE4LjIzOTNDNzYuODI2MSAxOC4yMzkzIDc4Ljc2ODQgMTkuNDk2MSA3OC44MTI0IDIxLjczNzNINzYuODk2NEM3Ni44MDg1IDIwLjcxNzggNzYuMDI2MiAxOS44NzQgNzQuNDcwNiAxOS44NzRDNzMuMDk5NSAxOS44NzQgNzIuMTY3OSAyMC41MjQ0IDcyLjE2NzkgMjEuNjQwNkM3Mi4xNjc5IDIyLjQyMjkgNzIuNzEyOCAyMi45ODU0IDczLjgyOSAyMy4yNDAyTDc1Ljc4ODkgMjMuNzIzNkM3Ny41OTA3IDI0LjE2MzEgNzguOTYxOCAyNS4wMTU2IDc4Ljk2MTggMjcuMDU0N0M3OC45NjE4IDI5LjQxMDIgNzcuMDU0NiAzMC43MzczIDc0LjMzODcgMzAuNzM3M0M3MC45OTg5IDMwLjczNzMgNjkuODgyNyAyOC43ODYxIDY5LjgzODcgMjcuMTY4OVpNODEuMzM5NSAyMS4yMVYxOC45NTEySDgzLjI1NTVWMjEuMjFIODUuMDY2VjIyLjc3NDRIODMuMjU1NVYyNy43MzE0QzgzLjI1NTUgMjguNzQyMiA4My42MzM0IDI5LjAyMzQgODQuNjc5MyAyOS4wMjM0Qzg0Ljg0NjMgMjkuMDIzNCA4NS4wMDQ1IDI5LjAyMzQgODUuMTE4OCAyOS4wMDU5VjMwLjVDODQuOTYwNSAzMC41MjY0IDg0LjU5MTQgMzAuNTYxNSA4NC4xOTU5IDMwLjU2MTVDODEuOTM3MSAzMC41NjE1IDgxLjMxMzEgMjkuNzUyOSA4MS4zMTMxIDI3Ljg4OTZWMjIuNzc0NEg4MC4wMjk5VjIxLjIxSDgxLjMzOTVaTTkwLjMzNTMgMjEuMDUxOEM5My4wMDcxIDIxLjA1MTggOTQuNDU3MyAyMi45MzI2IDk0LjQ1NzMgMjUuNDYzOVYyNi4yMTA5Qzk0LjQ1NzMgMjguODMwMSA5My4wMTU5IDMwLjY1ODIgOTAuMzM1MyAzMC42NTgyQzg3LjY1NDYgMzAuNjU4MiA4Ni4xOTU2IDI4LjgzMDEgODYuMTk1NiAyNi4yMTA5VjI1LjQ2MzlDODYuMTk1NiAyMi45NDE0IDg3LjY2MzQgMjEuMDUxOCA5MC4zMzUzIDIxLjA1MThaTTkwLjMzNTMgMjIuNjE2MkM4OC44ODUxIDIyLjYxNjIgODguMTY0NCAyMy44MDI3IDg4LjE2NDQgMjUuNDkwMlYyNi4yMDIxQzg4LjE2NDQgMjcuODYzMyA4OC44NzYzIDI5LjA4NSA5MC4zMzUzIDI5LjA4NUM5MS43OTQzIDI5LjA4NSA5Mi40OTc0IDI3Ljg3MjEgOTIuNDk3NCAyNi4yMDIxVjI1LjQ5MDJDOTIuNDk3NCAyMy43OTM5IDkxLjc4NTUgMjIuNjE2MiA5MC4zMzUzIDIyLjYxNjJaTTk2LjEwNTUgMzAuNVYyMS4yMUg5OC4wNTY3VjIyLjQzMTZIOTguMTI3Qzk4LjM2NDMgMjEuODUxNiA5OS4wNTg2IDIxLjA3ODEgMTAwLjM1MSAyMS4wNzgxQzEwMC42MDYgMjEuMDc4MSAxMDAuODI1IDIxLjA5NTcgMTAxLjAxIDIxLjEzMDlWMjIuODUzNUMxMDAuODQzIDIyLjgwOTYgMTAwLjUgMjIuNzgzMiAxMDAuMTc1IDIyLjc4MzJDOTguNjEwNCAyMi43ODMyIDk4LjA4MyAyMy43NSA5OC4wODMgMjQuOTk4VjMwLjVIOTYuMTA1NVpNMTA1Ljc0MyAzMC42NTgyQzEwMy4yNTYgMzAuNjU4MiAxMDEuNjc0IDI5LjAxNDYgMTAxLjY3NCAyNi4yNjM3VjI1LjMyMzJDMTAxLjY3NCAyMi43MzA1IDEwMy4yMiAyMS4wNTE4IDEwNS42NjQgMjEuMDUxOEMxMDguMTQyIDIxLjA1MTggMTA5LjYzNiAyMi43OTIgMTA5LjYzNiAyNS40MTExVjI2LjI5ODhIMTAzLjU5OFYyNi41MTg2QzEwMy41OTggMjguMDgzIDEwNC40NDIgMjkuMTIwMSAxMDUuNzY5IDI5LjEyMDFDMTA2Ljc2MiAyOS4xMjAxIDEwNy40MzkgMjguNjI3OSAxMDcuNjc3IDI3LjgyODFIMTA5LjUzMUMxMDkuMjUgMjkuMzMxMSAxMDguMDM3IDMwLjY1ODIgMTA1Ljc0MyAzMC42NTgyWk0xMDMuNTk4IDI0LjkzNjVIMTA3LjcyOVYyNC45MTg5QzEwNy43MjkgMjMuNjAwNiAxMDYuOTEyIDIyLjU2MzUgMTA1LjY3MyAyMi41NjM1QzEwNC40MTYgMjIuNTYzNSAxMDMuNTk4IDIzLjYwMDYgMTAzLjU5OCAyNC45MTg5VjI0LjkzNjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                      data-ll-status="loading"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <div className="accordion-header active">
                    <div className="header-row">
                      <ul>
                        <li>Products</li>
                        <li>Services</li>
                        <li>Legal</li>
                        <li>About Us</li>
                        <li>Others</li>
                      </ul>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion-body" style={{ display: "block" }}>
                    <div className="col-footer-wrapper">
                      <div className="col-footer-content">
                        <h4>Products</h4>
                        {data.footer1.Products.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>Services</h4>
                        {data.footer1.Services.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>Legal</h4>
                        {data.footer1.Legal.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>About Us</h4>
                        {data.footer1.AboutUs.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>Others</h4>
                        {data.footer1.Others.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <div className="accordion-header active">
                    <div className="header-row">
                      <ul>
                        <li>Info Center</li>
                        <li>Renewal</li>
                        <li>Claim</li>
                        <li>Help</li>
                        <li>Customer Reviews</li>
                      </ul>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion-body" style={{ display: "block" }}>
                    <div className="col-footer-wrapper">
                      <div className="col-footer-content">
                        <h4>Products</h4>
                        {data.footer2.InfoCenter.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>Services</h4>
                        {data.footer2.Renewal.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>Legal</h4>
                        {data.footer2.Claims.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>About Us</h4>
                        {data.footer2.Help.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>Others</h4>
                        {data.footer2.CustomerReviews.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <div className="accordion-header active">
                    <div className="header-row">
                      <ul>
                        <li>Car Insurance</li>
                        <li>Two Wheeler Insurance</li>
                        <li>Health Insurance</li>
                        <li>Travel Insurance</li>
                        <li>SME Insurance</li>
                      </ul>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion-body" style={{ display: "block" }}>
                    <div className="col-footer-wrapper">
                      <div className="col-footer-content">
                        <h4>Products</h4>
                        {data.footer3.CarInsurance.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>Services</h4>
                        {data.footer3.TwoWheelerInsurance.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>Legal</h4>
                        {data.footer3.HealthInsurance.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>About Us</h4>
                        {data.footer3.TravelInsurance.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                      <div className="col-footer-content">
                        <h4>Others</h4>
                        {data.footer3.SMEInsurance.map((i) => {
                          return (
                            <ul>
                              <li>
                                <a href="">{i}</a>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="footer-bottom-block">
            <p>
              ICICI Lombard General Insurance Company Ltd. is one of the leading
              private sector general insurance company in India offering
              insurance coverage for motor, health, travel, home, student travel
              and more. Policies can be purchased and renewed online as well.
              Immediate issuance of policy copy online.
            </p>
            <p>
              ICICI trade logo displayed above belongs to ICICI Bank and is used
              by ICICI Lombard GIC Ltd. under license and Lombard logo belongs
              to ICICI Lombard GIC Ltd. Insurance is the subject matter of the
              solicitation. The advertisement contains only an indication of
              cover offered. For more details on risk factors, terms, conditions
              and exclusions, please read the sales brochure carefully before
              concluding a sale. CIN: L67200MH2000PLC129408
            </p>
            <div className="gcInnerwrap">
              <div className="gcLogosec">
                <span>
                  <img
                    className="lazy loading"
                    alt="entrust"
                    src="/docs/default-source/assets/images/entrust.png"
                    data-ll-status="loading"
                  />
                </span>
                <span>
                  <img
                    className="lazy loading"
                    alt="digicert"
                    src="/docs/default-source/assets/images/digicert.png"
                    data-ll-status="loading"
                  />
                </span>
                <span>
                  <a
                    href="https://bimabharosa.irdai.gov.in/Home/Home"
                    target="_blank"
                  >
                    <img
                      src="/docs/default-source/assets/images/bima_bharosa.png"
                      width="120px"
                      alt="bima_bharosa"
                    />
                  </a>
                </span>
              </div>
              <div className="gc-InMax">
                <div className="gc-Button">Group Companies</div>
                <ul className="gc-List">
                  <li>
                    <a
                      href="https://www.icicigroupcompanies.com"
                      target="_blank"
                    >
                      ICICI Group
                    </a>
                  </li>
                  <li>
                    <a href="https://www.icicibank.com/" target="_blank">
                      ICICI Bank
                    </a>
                  </li>
                  <li>
                    <a href="http://www.iciciprulife.com/" target="_blank">
                      ICICI Prudential Life Insurance
                    </a>
                  </li>
                  <li>
                    <a href="https://www.icicipruamc.com" target="_blank">
                      ICICI Prudential Mutual Fund
                    </a>
                  </li>
                  <li>
                    <a href="https://www.icicidirect.com" target="_blank">
                      ICICI Direct
                    </a>
                  </li>
                  <li>
                    <a href="https://www.icicihfc.com" target="_blank">
                      ICICI Home Finance
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.icicihfc.com/home-search"
                      target="_blank"
                    >
                      ICICI Home Search
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
