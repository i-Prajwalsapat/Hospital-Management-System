import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent implements OnInit {
  id: number = 0; // ID to fetch specific medicine
  medicine: Medicine = new Medicine(); // Object to store fetched medicine details

  constructor(private medicineService: MedicineService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Extract `id` from the route
    this.medicineService.getMedicineById(this.id).subscribe({
      next: (data) => {
        this.medicine = data; // Assign fetched medicine data to the object
        console.log('Medicine details fetched:', this.medicine);
      },
      error: (error) => {
        console.error('Error fetching medicine details:', error); // Handle errors
      }
    });
  }
}


// id:number=0;
//     patient:Patient=new Patient();
//      constructor(private patientService:PatientService,private route:ActivatedRoute){

//      }

//      ngOnInit():void{
        
//         this.id=this.route.snapshot.params['id'];
//         this.patientService.getPatientById(this.id).subscribe(data=>{

//           this.patient=data;
//         })
//      }