import { Hero } from "@shared/models/hero";
import { Component, OnInit, Input } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "bcm-hero-editor",
  templateUrl: "./hero-editor.component.html",
  styleUrls: ["./hero-editor.component.scss"]
})
export class HeroEditorComponent implements OnInit {
  @Input() public hero: Hero;

  get heroName(): string {
    return this.heroForm.get("name").value;
  }

  public heroForm = this.fb.group({
    name: ["", Validators.required],
    id: ["", Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.heroForm.setValue(this.hero);
  }
}
