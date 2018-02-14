<template>
</template>

<script>
export default {

  name: 'Kanban',

  data () {
    return {

    }
  }
}
</script>

<style lang="css">
.days.week {
  display: flex;
  align-items: stretch;
  width: 100%;
}
.days.week .day {
  width: 14.28571429%;
  border-right: 1px solid #dbdbdb;
  flex: 1;
}
.days.week .day:last-child {
  border-right: none;
}
.days.week .day:hover {
  background-color: #fff;
}
.days.week .day.day-today {
  background-color: #fff;
}
.days.week .day .day-header {
  text-align: center;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
}
.days.week .day .day-header .date-name {
  color: #909090;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 5px;
  text-transform: capitalize;
}
.days.week .day .day-header .total-hours {
  color: #b7b6b6;
  font-weight: 500;
  font-size: 12px;
}
.days.week .day .day-entries .entry {
  position: relative;
}
.days.week .day .day-entries .entry .entry-box {
  background-color: #626fb5;
  color: #fff;
  padding: 28px 10px;
  margin: 10px;
  position: relative;
  border-radius: 2px;
}
.days.week .day .day-entries .entry .entry-box .project {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
}
.days.week .day .day-entries .entry .entry-box .project span {
  font-size: 8px;
}
.days.week .day .day-entries .entry .entry-box .description {
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;
  word-wrap: break-word;
}
.days.week .day .day-entries .entry .entry-box .time {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
}
.days.week .day .day-entries .entry .popover {
  position: absolute;
  width: 300px;
  background-color: #fff;
  border-radius: 3px;
  padding: 15px;
  z-index: 99;
  left: 100%;
  top: 0;
  margin-left: 15px;
}
.days.week .day .day-entries .entry .popover:after {
  content: "";
  position: absolute;
  top: 20px;
  left: 0px;
  width: 15px;
  height: 15px;
  background-color: #fff;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  box-shadow: -2px 3px 3px 0 rgba(0, 0, 0, 0.03), -1px 1px 0 0.5px rgba(0, 0, 0, 0.06);
}
.days.week .day .day-entries .entry .popover.right {
  right: 100%;
  left: initial;
  margin-left: 0;
  margin-right: 15px;
}
.days.week .day .day-entries .entry .popover.right:after {
  left: initial;
  right: -15px;
  box-shadow: 2px -3px 3px 0 rgba(0, 0, 0, 0.03), 1px -1px 0 0.5px rgba(0, 0, 0, 0.06);
}
.days.week .day .day-entries .entry .popover.bottom {
  bottom: 0;
  top: initial;
}
.days.week .day .day-entries .entry .popover.bottom:after {
  top: initial;
  bottom: 20px;
  left: 0;
}
.days.week .day .day-entries .entry .popover.bottom.right:after {
  top: initial;
  left: initial;
  right: -15px;
  bottom: 20px;
}
.days.week .day .day-entries .entry .entry-update .form-control {
  margin-bottom: 10px;
}
.days.week .day .day-entries .entry .entry-update .form-control label {
  text-transform: uppercase;
  color: #666;
  font-weight: 600;
  font-size: 12px;
  padding-bottom: 3px;
  display: block;
}
.days.week .day .day-entries .entry .entry-update .form-control textarea,
.days.week .day .day-entries .entry .entry-update .form-control input[type="text"],
.days.week .day .day-entries .entry .entry-update .form-control select {
  width: 100%;
  border: 2px solid #eee;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  padding: 0 15px;
}
.days.week .day .day-entries .entry .entry-update .form-control textarea {
  padding: 5px 10px;
  height: 100px;
}
.days.week .day .day-entries .entry .entry-update .actions {
  display: flex;
  justify-content: space-between;
}
.days.week .day .day-entries .entry .entry-update .actions .btn-save,
.days.week .day .day-entries .entry .entry-update .actions .btn-remove {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 2px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
.days.week .day .day-entries .entry .entry-update .actions .btn-save {
  background-color: #4CAF50;
}
.days.week .day .day-entries .entry .entry-update .actions .btn-remove {
  color: #F44336;
}
.days.week .day .day-entries .entry .entry-update .actions .btn-remove:hover {
  background-color: #F44336;
  color: #fff;
}
.days.week .day .day-entries .entry-create {
  padding: 10px;
}
.days.week .day .day-entries .entry-create button {
  display: block;
  width: 100%;
  border-radius: 2px;
  padding: 15px 0;
  border: none;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background-color: #ebebeb;
  color: #8f8f8f;
}
.days.week .day .day-entries .entry-create button:hover {
  background-color: #d6d4d4;
}

</style>