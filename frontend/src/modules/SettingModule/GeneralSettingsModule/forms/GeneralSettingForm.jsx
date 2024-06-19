import { useDispatch, useSelector } from 'react-redux';
import { Input, Form, Select, Switch } from 'antd';

// import languages from '@/locale/languages';
import useLanguage from '@/locale/useLanguage';
import { translateAction } from '@/redux/translate/actions';
import { countryList } from '@/utils/countryList';
import { selectLangDirection } from '@/redux/translate/selectors';

const languages = [
  { icon: '🇦🇱 ', label: 'Albanian', value: 'sq_al' },
  { icon: '🇩🇿 ', label: 'Arabic', value: 'ar_eg', isRtl: true },
  { icon: '🇦🇲 ', label: 'Armenian', value: 'hy_am' },
  { icon: '🇦🇿 ', label: 'Azerbaijani', value: 'az_az' },
  { icon: '🇪🇦 ', label: 'Basque', value: 'eu_es' },
  { icon: '🇧🇾 ', label: 'Belarusian', value: 'by_by' },
  { icon: '🇷🇸 ', label: 'Serbian', value: 'sr_rs' },
  { icon: '🇧🇩 ', label: 'Bengali', value: 'bn_bd' },
  { icon: '🇧🇬 ', label: 'Bulgarian', value: 'bg_bg' },
  { icon: '🇪🇦 ', label: 'Catalonian', value: 'ca_es' },
  { icon: '🇨🇳 ', label: 'Chinese', value: 'zh_cn' },
  { icon: '🇭🇷 ', label: 'Croatian', value: 'hr_hr' },
  { icon: '🇨🇿 ', label: 'Czech', value: 'cs_cz' },
  { icon: '🇩🇰 ', label: 'Danish', value: 'da_dk' },
  { icon: '🇳🇱 ', label: 'Dutch', value: 'nl_nl' },
  { icon: '🇪🇪 ', label: 'Estonian', value: 'et_ee' },
  { icon: '🇵🇭 ', label: 'Filipino', value: 'fil_ph' },
  { icon: '🇫🇮 ', label: 'Finnish', value: 'fi_fi' },
  { icon: '🇫🇷 ', label: 'French', value: 'fr_fr' },
  { icon: '🇪🇸 ', label: 'Galician', value: 'gl_es' },
  { icon: '🇬🇪 ', label: 'Georgian', value: 'ka_ge' },
  { icon: '🇩🇪 ', label: 'German', value: 'de_de' },
  { icon: '🇬🇷 ', label: 'Greek', value: 'el_gr' },
  { icon: '🇮🇱 ', label: 'Hebrew', value: 'he_il', isRtl: true },
  { icon: '🇮🇳 ', label: 'Hindi', value: 'hi_in' },
  { icon: '🇭🇺 ', label: 'Hungarian', value: 'hu_hu' },
  { icon: '🇮🇩 ', label: 'Indonesian', value: 'id_id' },
  { icon: '🇮🇸 ', label: 'Icelandic', value: 'is_is' },
  { icon: '🇮🇹 ', label: 'Italian', value: 'it_it' },
  { icon: '🇯🇵 ', label: 'Japanese ', value: 'ja_jp' },
  { icon: '🇩🇿 ', label: 'Kabyle', value: 'kb_dz' },
  { icon: '🇮🇶 ', label: 'Kurdish', value: 'kmr_iq' },
  { icon: '🇰🇿 ', label: 'Kazakh', value: 'kk_kz' },
  { icon: '🇰🇷 ', label: 'Korean', value: 'ko_kr' },
  { icon: '🇱🇻 ', label: 'Latvian', value: 'lv_lv' },
  { icon: '🇱🇹 ', label: 'Lithuanian', value: 'lt_lt' },
  { icon: '🇲🇰 ', label: 'Macedonian', value: 'mk_mk' },
  { icon: '🇲🇾 ', label: 'Malay', value: 'ms_my' },
  { icon: '🇲🇹 ', label: 'Maltese', value: 'mt_mt' },
  { icon: '🇲🇳 ', label: 'Mongolian', value: 'mn_mn' },
  { icon: '🇳🇵 ', label: 'Nepali', value: 'ne_np' },
  { icon: '🇳🇴 ', label: 'Norwegian', value: 'nb_no' },
  { icon: '🇮🇷 ', label: 'Persian', value: 'fa_ir', isRtl: true },
  { icon: '🇵🇱 ', label: 'Polish', value: 'pl_pl' },
  { icon: '🇧🇷 ', label: 'Portuguese Brazil', value: 'pt_br' },
  { icon: '🇵🇹 ', label: 'Portuguese Portugal', value: 'pt_pt' },
  { icon: '🇷🇴 ', label: 'Romanian', value: 'ro_ro' },
  { icon: '🇷🇺 ', label: 'Russian', value: 'ru_ru' },
  { icon: '🇸🇰 ', label: 'Slovak', value: 'sk_sk' },
  { icon: '🇸🇮 ', label: 'Slovenian', value: 'sl_si' },
  { icon: '🇪🇸 ', label: 'Spanish', value: 'es_es' },
  { icon: '🇰🇪 ', label: 'Swahili', value: 'sw_ke' },
  { icon: '🇸🇪 ', label: 'Swedish', value: 'sv_se' },
  { icon: '🇮🇳 ', label: 'Tamil', value: 'ta_in' },
  { icon: '🇹🇭 ', label: 'Thai', value: 'th_th' },
  { icon: '🇹🇷 ', label: 'Turkish', value: 'tr_tr' },
  { icon: '🇺🇦 ', label: 'Ukrainian', value: 'uk_ua' },
  { icon: '🇵🇰 ', label: 'Urdu', value: 'ur_pk', isRtl: true },
  { icon: '🇺🇿 ', label: 'Uzbek', value: 'uz_uz' },
  { icon: '🇻🇳 ', label: 'Vietnamese', value: 'vi_vn' },
];

export default function GeneralSettingForm() {
  const translate = useLanguage();
  const dispatch = useDispatch();
  const langDirection = useSelector(selectLangDirection);
  return (
    <div style={{ direction: langDirection }}>
      <Form.Item
        label={translate('language')}
        name="idurar_app_language"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          showSearch
          placeholder={translate('select language')}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().startsWith((optionB?.label ?? '').toLowerCase())
          }
          onSelect={(value) => {
            dispatch(translateAction.translate(value));
          }}
        >
          {languages.map((language) => (
            <Select.Option key={language.value} value={language.value} label={language.label}>
              <div className="demo-option-label-item">
                <span role="img" aria-label={language.label}>
                  {language.icon}
                </span>
                {language.label}
              </div>
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label={translate('country')}
        name="idurar_app_country"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().startsWith((optionB?.label ?? '').toLowerCase())
          }
          style={{
            width: '100%',
          }}
        >
          {countryList.map((language) => (
            <Select.Option
              key={language.value}
              value={language.value}
              label={translate(language.label)}
            >
              {language?.icon && language?.icon + ' '}
              {translate(language.label)}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label={translate('Date Format')}
        name="idurar_app_date_format"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          showSearch
          style={{
            width: '100%',
          }}
          options={[
            { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
            { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
            { value: 'DD-MM-YYYY', label: 'DD-MM-YYYY' },
            { value: 'DD.MM.YYYY', label: 'DD.MM.YYYY' },
            { value: 'YYYY/MM/DD', label: 'YYYY/MM/DD' },
            { value: 'YYYY-DD-MM', label: 'YYYY-DD-MM' },
            { value: 'YYYY.MM.DD', label: 'YYYY.MM.DD' },
            { value: 'MM/YYYY/DD', label: 'MM/YYYY/DD' },
            { value: 'MM.DD.YYYY', label: 'MM.DD.YYYY' },
            { value: 'DD/YYYY/MM', label: 'DD/YYYY/MM' },
            { value: 'DD-YYYY-MM', label: 'DD-YYYY-MM' },
            { value: 'DD.YYYY.MM', label: 'DD.YYYY.MM' },
            { value: 'YYYY/DD/MM', label: 'YYYY/DD/MM' },
            { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
            { value: 'MM.DD.YY', label: 'MM.DD.YY' },
            { value: 'DD-MMM-YY', label: 'DD-MMM-YY' },
            { value: 'YY/MM/DD', label: 'YY/MM/DD' },
            { value: 'DD MMM YYYY', label: 'DD MMM YYYY' },
            { value: 'MMM DD, YYYY', label: 'MMM DD, YYYY' },
            { value: 'DD-MM-YY', label: 'DD-MM-YY' },
            { value: 'MM-DD-YY', label: 'MM-DD-YY' },
            { value: 'YY.MM.DD', label: 'YY.MM.DD' },
            { value: 'MMM DD YY', label: 'MMM DD YY' },
            { value: 'DD MMM YY', label: 'DD MMM YY' },
            { value: 'YYYY/MM/DD', label: 'YYYY/MM/DD' },
            { value: 'MM.YYYY.DD', label: 'MM.YYYY.DD' },
            { value: 'YYYY/DD/MM', label: 'YYYY/DD/MM' },
            { value: 'MM-DD-YYYY', label: 'MM-DD-YYYY' },
            { value: 'DD-MM-YYYY', label: 'DD-MM-YYYY' },
            { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
            { value: 'YY/DD/MM', label: 'YY/DD/MM' },
            { value: 'MM-DD', label: 'MM-DD' },
            { value: 'DD-MM', label: 'DD-MM' },
            { value: 'MM/YY', label: 'MM/YY' },
            { value: 'YYYY-MMM-DD', label: 'YYYY-MMM-DD' },
            { value: 'MM/DD', label: 'MM/DD' },
            { value: 'DD.MM.YY', label: 'DD.MM.YY' },
            { value: 'MM/YY/DD', label: 'MM/YY/DD' },
            { value: 'MMMM DD, YYYY', label: 'MMMM DD, YYYY' },
            { value: 'DD MMMM YYYY', label: 'DD MMMM YYYY' },
            { value: 'MM-YY-DD', label: 'MM-YY-DD' },
            { value: 'MMM. DD, YY', label: 'MMM. DD, YY' },
            { value: 'YYYY MM DD', label: 'YYYY MM DD' },
            { value: 'YY-MM-DD', label: 'YY-MM-DD' },
          ]}
        />
      </Form.Item>
      <Form.Item
        label={translate('email')}
        name="idurar_app_company_email"
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  );
}
