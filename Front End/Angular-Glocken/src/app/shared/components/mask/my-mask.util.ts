import { MaskGenerator } from './../../interfaces/mask-generator.interface';

export class MyMaskUtil {

    private static PHONE_SMALL = '(99) 99999-9999';
    private static PHONE_BIG = '(99) 99999-9999';
    private static CPF = '999.999.999-99';
    private static CNPJ = '99.999.999/9999-99';
    private static RG = '99.999.999-99';
    /*  private static DOB = '99/99/9999' */
    public static PHONE_MASK_GENERATOR: MaskGenerator = {
        generateMask: () => MyMaskUtil.PHONE_SMALL,
    }

    public static DYNAMIC_PHONE_MASK_GENERATOR: MaskGenerator = {
        generateMask: (value: string) => {
            return MyMaskUtil.hasMoreDigits(value, MyMaskUtil.PHONE_SMALL) ?
                MyMaskUtil.PHONE_BIG :
                MyMaskUtil.PHONE_SMALL;
        },
    }

    public static CPF_MASK_GENERATOR: MaskGenerator = {
        generateMask: () => MyMaskUtil.CPF,
    }

    public static RG_MASK_GENERATOR: MaskGenerator = {
        generateMask: () => MyMaskUtil.RG,
    }

    public static CNPJ_MASK_GENERATOR: MaskGenerator = {
        generateMask: () => MyMaskUtil.CNPJ,
    }

    public static PERSON_MASK_GENERATOR: MaskGenerator = {
        generateMask: (value: string) => {
            return MyMaskUtil.hasMoreDigits(value, MyMaskUtil.CPF) ?
                MyMaskUtil.CNPJ :
                MyMaskUtil.CPF;
        },
    }

    /* public static DOB_MASK_GENERATOR: MaskGenerator = {
        generateMask: () => MyMaskUtil.DOB,
    } */

    private static hasMoreDigits(v01: string, v02: string): boolean {
        let d01 = this.onlyDigits(v01);
        let d02 = this.onlyDigits(v02);
        let len01 = (d01 && d01.length) || 0;
        let len02 = (d02 && d02.length) || 0;
        let moreDigits = (len01 > len02);
        return moreDigits;
    }

    private static onlyDigits(value: string): string {
        let onlyDigits = (value != null) ? value.replace(/\D/g, '') : null;
        return onlyDigits;
    }
}