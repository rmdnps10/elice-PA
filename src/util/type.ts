export interface Course {
  id: number;
  is_recommended: boolean;
  is_chat_room_disabled: boolean;
  is_post_student_info_visible: boolean;
  is_post_student_email_enabled: boolean;
  is_post_tutor_email_enabled: boolean;
  preference: {
    boards: boolean;
    images: boolean;
    manage: boolean;
    configs: boolean;
    members: boolean;
    lectures: boolean;
    requests: boolean;
    sections: boolean;
    tutoring: boolean;
    dashboard: boolean;
    libraries: boolean;
    attendance: boolean;
    leaderboard: boolean;
    lectureroom: boolean;
    ai_dashboard: boolean;
    attendance_admin: boolean;
    section_schedule: boolean;
  };
  enroll_begin_datetime: number;
  enroll_end_datetime: number | null | string;
  release_datetime: number;
  begin_datetime: number;
  end_datetime: number | null | string;
  complete_datetime: number | null | string;
  enrolled_role_period: number | null | string;
  brushup_info: null | string;
  enroll_type: number;
  subscription_level: null | string;
  enroll_limit_number: null | string;
  price: string;
  price_usd: string;
  unit: null | string;
  discounted_price: string;
  discounted_price_usd: string;
  discount_begin_datetime: null | string;
  discount_end_datetime: null | string;
  discount_title: null | string;
  discount_rate: null | string;
  completion_info: {
    unit: {
      value: number;
      is_enabled: boolean;
    };
    condition: {
      score: number;
      progress: number;
      is_enabled: boolean;
    };
  };
  course_type: number;
  info_summary_visibility_dict: {
    level: boolean;
    period: boolean;
    class_type: boolean;
    class_times: boolean;
    completion_unit: boolean;
    exercise_page_count: boolean;
    completion_condition: boolean;
    programming_language: boolean;
    total_video_duration: boolean;
    enrolled_student_count: boolean;
    lecture_page_access_period: boolean;
  };
  is_exercise_deprecated: boolean;
  last_course_info_id: number;
  title: string;
  code: string;
  short_description: string;
  class_times: [];
  class_type: number;
  taglist: null | string[];
  promote_video_url: null | string;
  logo_file_url: string;
  image_file_url: null | string;
  period: number;
  version: number;
  is_discounted: boolean;
  attend_info: {
    is_enabled: boolean;
    active_end_date: string;
    active_begin_date: string;
    check_in_end_time: string;
    check_out_end_time: string;
    check_in_begin_time: string;
    check_out_begin_time: string;
    required_stay_seconds: number;
  };
  last_attend_updated_date: null | string;
  leaderboard_ranking_type: number;
  leaderboard_info: {
    entry_type: number;
    score_type: number;
    ranking_type: number;
  };
  is_free: boolean;
  status: number;
  library_access_type: null | string;
  library_credit: number;
  library_type: number;
  is_enroll_noti_enabled: boolean;
  is_datetime_enrollable: boolean;
  agreement_info: {
    title: string;
    is_enabled: boolean;
    description: string;
  };
  is_enroll_guest_enabled: boolean;
  is_legacy_test: boolean;
  last_review_status: number;
  course_agreed_datetime: null | string;
  course_role: number;
  has_past_course_role: boolean;
  ern: string;
  aibot_info: {
    is_enabled: boolean;
  };
  enrolled_user_count: number;
  enrolled_student_count: number;
  normal_lecture_count: number;
  test_lecture_count: number;
  normal_lecture_page_count: number;
  is_library_material_instance_exist: boolean;
  is_library_material_instance_sync_enabled: boolean;
  enrolled_role_begin_datetime: null | string;
  enrolled_role_end_datetime: null | string;
  enrolled_role_brushup_begin_datetime: null | string;
  enrolled_role_brushup_end_datetime: null | string;
  lecture_page_read_info: null | string;
  tags: null | string[];
  tracks: [
    {
      id: number;
      title: string;
    },
  ];
  instructors: null | string[];
  test_lecture: null | string;
}
