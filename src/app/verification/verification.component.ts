import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
})
export class VerificationComponent implements OnInit {
  verified = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.verified = this.route
                        .snapshot
                        .data
                        .response
                        .success;
    if (!this.verified) {
      this.router.navigate(['home']);
    }
  }
}
