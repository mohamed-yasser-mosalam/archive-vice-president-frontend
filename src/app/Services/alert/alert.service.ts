import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

const FALLBACK = 'حدث خطأ غير متوقع';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private readonly base = {
    confirmButtonText: 'حسناً',
    customClass: {popup: 'swal-rtl'}
  };

  async success(msg: string): Promise<void> {
    await Swal.fire({...this.base, icon: 'success', text: msg});
  }

  async error(errOrMsg: any): Promise<void> {
    await Swal.fire({...this.base, icon: 'error', text: this.extract(errOrMsg)});
  }

  async confirm(msg: string): Promise<boolean> {
    const result = await Swal.fire({
      ...this.base,
      icon: 'warning',
      text: msg,
      showCancelButton: true,
      confirmButtonText: 'نعم',
      cancelButtonText: 'إلغاء',
      reverseButtons: true
    });
    return result.isConfirmed;
  }

  private extract(e: any): string {
    if (typeof e === 'string' && e) {
      return e;
    }
    const inner = e?.error;
    if (typeof inner?.message === 'string' && inner.message) {
      return inner.message;
    }
    if (typeof inner === 'string' && inner) {
      return inner;
    }
    return FALLBACK;
  }
}
