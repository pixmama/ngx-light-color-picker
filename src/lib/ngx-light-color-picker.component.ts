import {
  AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Renderer2, ViewChild, Output, Host,
  HostListener
} from '@angular/core';

@Component({
  selector: 'ngx-light-color-picker',
  templateUrl: './ngx-light-color-picker.component.html',
  styleUrls: ['./ngx-light-color-picker.component.scss']
})
export class NgxLightColorPickerComponent implements OnInit, AfterViewInit {
  @ViewChild('colorPickerCanvas') private canvas: ElementRef;
  private context: CanvasRenderingContext2D;
  private color = null;
  private isMouseDown = false;
  private selectedColor: boolean;
  @Input('width') width = 300;
  @Input('height') height = 300;
  @Output() private colorSelected: EventEmitter<any> = new EventEmitter<any>();
  @HostListener('mousedown', ['$event']) mouseDown = this.onMouseDown;
  @HostListener('mouseup', ['$event']) mouseUp = this.onMouseUp;
  @HostListener('mousemove', ['$event']) mouseMove = this.onMouseMove;

  @HostListener('touchmove', ['$event']) touchMove = this.onTouchMove;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.pickerDraw();
  }

  pickerDraw() {
    this.canvas.nativeElement.width = this.width;
    this.canvas.nativeElement.height = this.height;
    this.context = this.canvas.nativeElement.getContext('2d');
    const colorGradient = this.context.createLinearGradient(0, 0, this.width, 0);
    colorGradient.addColorStop(0, 'rgb(255,0,0)');
    colorGradient.addColorStop(0.16, 'rgb(255,0,255)');
    colorGradient.addColorStop(0.32, 'rgb(0,0,255)');
    colorGradient.addColorStop(0.48, 'rgb(0,255,255)');
    colorGradient.addColorStop(0.64, 'rgb(0,255,0)');
    colorGradient.addColorStop(0.80, 'rgb(255,255,0)');
    colorGradient.addColorStop(1, 'rgb(255,0,0)');
    this.context.fillStyle = colorGradient;
    this.context.fillRect(0, 0, this.width, this.height);
    const bwGradient = this.context.createLinearGradient(0, 0, 0, this.height);
    bwGradient.addColorStop(0, 'rgba(255,255,255,1)');
    bwGradient.addColorStop(0.5, 'rgba(255,255,255,0)');
    bwGradient.addColorStop(0.5, 'rgba(0,0,0,0)');
    bwGradient.addColorStop(1, 'rgba(0,0,0,1)');
    this.context.fillStyle = bwGradient;
    this.context.fillRect(0, 0, this.width, this.height);
  }

  onMouseUp(e) {
    this.isMouseDown = false;
    this.onMouseMove(e);
  }

  onMouseDown(e) {
    this.isMouseDown = true;
    this.onMouseMove(e);
  }

  onMouseMove(e) {
    e.preventDefault();
    if (this.isMouseDown) {
      this.onColorSelect(e, this.relativeCoordinates(e));
    }
  }

  onTouchMove(e) {
    e.preventDefault();
    const touch = e.changedTouches[0];
    this.onColorSelect(e, this.relativeCoordinates(touch));
  }

  onColorSelect(e, coords) {
    const data = this.context.getImageData(coords.x, coords.y, 1, 1).data;
    this.setColor({
      r: data[0],
      g: data[1],
      b: data[2]
    });
  }

  setColor(rgb) {

    // save calculated color
    this.color = {
      hex: this.rgbToHex(rgb),
      rgb: rgb
    };

    // update element attribute
    this.canvas.nativeElement.setAttribute('color', this.color.hex);
    this.colorSelected.emit({
      detail: {
        rgb: this.color.rgb,
        hex: this.color.hex
      }
    });
  }

  rgbToHex(color) {
    return '#' + this.componentToHex(color.r) + this.componentToHex(color.g) + this.componentToHex(color.b);
  }

  componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  relativeCoordinates(e) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return {x, y};
  }


  //selected color div

  onColorSelected(e) {
    this.selectedColor = e.detail.hex;
  }

  getSelectedColorStyle() {
    return {
      'background': this.selectedColor,
    };
  }
}
