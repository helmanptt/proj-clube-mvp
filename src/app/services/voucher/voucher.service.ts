import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoucherServiceService {

  constructor() { }

  getAll():String[] {
    return [
      '/assets/Logos Projeto Angular/ClienteF5_HomeGrill.png',
      '/assets/Logos Projeto Angular/Logo @opalitot (11).png',
      '/assets/Logos Projeto Angular/Logo GEAP.png',
      '/assets/Logos Projeto Angular/Logo Pizza Now.png',
      '/assets/Logos Projeto Angular/Logo San Remo Premium.png',
      '/assets/Logos Projeto Angular/Logo World Tennis.png',
      '/assets/Logos Projeto Angular/uninassau-logo.png'
    ]
  }
}
